# Wing Fu Restaurant

A simple, responsive website for Wing Fu Restaurant in Elmsdale, Nova Scotia.

## Local development

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Live hours

The separate wingfu-admin service publishes structured hours. Set VITE_HOURS_API_URL in this site's Netlify build environment to the admin site's HTTPS /api/public-hours URL, then deploy this integration. No secrets belong in this variable. The page fetches immediately, every 30 seconds, and on window focus; future admin saves do not require rebuilding this site. On API failure it retains the last fetched schedule, or uses the original regular hours on a new page. Holiday and vacation notices appear above the menu and expire using America/Halifax dates. Undated holiday notices remain until disabled. See the admin repository README for deployment and verification steps.
