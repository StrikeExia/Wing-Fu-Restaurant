import { Fragment, useEffect, useState } from 'react';
import { defaultHours, formatDate, formatRange, restaurantToday, validHours, visibleNotices } from './hours';

export function useLiveHours() {
  const [hours,setHours]=useState(defaultHours);
  // Only the public, read-only URL belongs here. Never put secrets in VITE_ values.
  const endpoint=import.meta.env.VITE_HOURS_API_URL;
  useEffect(()=>{
    if(!endpoint)return undefined;
    let active=true, pending=false;
    const controller=new AbortController();
    async function refresh() {
      if(pending)return;pending=true;
      try {
        const response=await fetch(endpoint,{cache:'no-store',credentials:'omit',signal:AbortSignal.any([controller.signal,AbortSignal.timeout(10000)])});
        if(!response.ok)return;
        const data=await response.json();if(active&&validHours(data))setHours(data);
      }catch{/* Retain the last known schedule if the API is temporarily unavailable. */}
      finally {pending=false;}
    }
    const onFocus=()=>{refresh();};
    refresh();const interval=setInterval(refresh,30000);window.addEventListener('focus',onFocus);
    return ()=>{active=false;controller.abort();clearInterval(interval);window.removeEventListener('focus',onFocus);};
  },[endpoint]);
  return hours;
}
export function SpecialNotices({hours}) {
  const [today,setToday]=useState(()=>new Date());
  useEffect(()=>{const timer=setInterval(()=>setToday(new Date()),30000);return()=>clearInterval(timer);},[]);
  const {holiday,vacation}=visibleNotices(hours,restaurantToday(today));
  if(!holiday&&!vacation)return null;
  return <div className="special-notices" aria-label="Special restaurant notices" aria-live="polite">
    {vacation&&<section className="special-notice"><h2>Closed for vacation</h2><p>{formatDate(vacation.start)} – {formatDate(vacation.end)} (inclusive)</p><p>Restaurant and dine-in closed during this period.</p></section>}
    {holiday&&<section className="special-notice"><h2>{holiday.description}</h2>{holiday.date&&<p>{formatDate(holiday.date)}</p>}{holiday.closed?<p>Restaurant closed all day.</p>:<><p><strong>Restaurant hours:</strong> {formatRange(holiday.restaurant)}</p><p>{holiday.dining?<><strong>Dine-in:</strong> {formatRange(holiday.dining)}</>:'No dine-in available.'}</p></>}</section>}
  </div>;
}
export function ScheduleRows({hours,service}) {
  return hours.regular.map((row,index)=><Fragment key={index}><strong>{row.label}</strong><span>{formatRange(row[service])}</span></Fragment>);
}
