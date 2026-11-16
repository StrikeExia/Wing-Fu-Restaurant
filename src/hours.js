export const defaultHours = {
  regular: [
    { label: 'Monday – Wednesday', restaurant: [720,1200], dining: [720,1110] },
    { label: 'Thursday – Saturday', restaurant: [720,1260], dining: [720,1170] },
    { label: 'Sunday', restaurant: [960,1200], dining: [960,1110] }
  ], holiday: null, vacation: null
};
export function formatTime(value) {
  return `${Math.floor(value/60)%12||12}:${String(value%60).padStart(2,'0')} ${value>=720?'pm':'am'}`;
}
export function formatRange(value) {return value.map(formatTime).join(' – ');}
export function formatDate(value) {return new Date(value+'T12:00:00Z').toLocaleDateString('en-CA',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'});}
export function restaurantToday(now=new Date()) {
  // Elmsdale dates, even when visitors are in a different time zone.
  const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Halifax',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now);
  return ['year','month','day'].map(type=>parts.find(part=>part.type===type).value).join('-');
}
function validDate(value) {return typeof value==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(value)&&!Number.isNaN(Date.parse(value+'T12:00:00Z'))&&new Date(value+'T12:00:00Z').toISOString().slice(0,10)===value;}
function validRange(value) {return Array.isArray(value)&&value.length===2&&value.every(n=>Number.isInteger(n)&&n>=0&&n<1440)&&value[1]>value[0];}
function validDining(row) {return validRange(row.restaurant)&&(row.dining===null||(validRange(row.dining)&&row.dining[0]>=row.restaurant[0]&&row.dining[1]<=row.restaurant[1]));}
export function validHours(data) {
  if(!data||!Array.isArray(data.regular)||data.regular.length<1||data.regular.length>7||!data.regular.every(row=>row&&typeof row.label==='string'&&row.label.trim()&&row.label.length<=60&&row.dining!==null&&validDining(row)))return false;
  if(data.holiday!=null) {
    const h=data.holiday;
    if(typeof h.description!=='string'||!h.description.trim()||h.description.length>100||typeof h.closed!=='boolean'||(h.date!==null&&!validDate(h.date))||(!h.closed&&!validDining(h)))return false;
  }
  if(data.vacation!=null&&(!validDate(data.vacation.start)||!validDate(data.vacation.end)||data.vacation.end<data.vacation.start))return false;
  return true;
}
export function visibleNotices(data,today=restaurantToday()) {
  return {
    holiday:data.holiday&&(!data.holiday.date||data.holiday.date>=today)?data.holiday:null,
    vacation:data.vacation&&data.vacation.end>=today?data.vacation:null
  };
}
