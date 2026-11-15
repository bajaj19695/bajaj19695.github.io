# Deepanshu Bajaj – Portfolio

React + Vite + Tailwind (v4), single page, terminal-style dark theme.

## Edit content
Everything is in `src/data.js` (profile, projects, skills, links).
- `ANONYMIZE = true` hides client/product names if your NDA requires it.
- Add a **public** version of your resume (without phone number) as `public/resume.pdf`.
- Check the LinkedIn URL in `profile.linkedin` (your resume says `deepanshu-bajaj-dev`, the site uses the one on Naukri).

## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # output in dist/

## Deploy free: GitHub Pages (from your PERSONAL account bajaj19695)
1. Create a public repo named `bajaj19695.github.io` and push this folder to `main`.
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push.
4. Site goes live at https://bajaj19695.github.io

## Deploy free: Vercel or Netlify
Import the GitHub repo. Build command `npm run build`, output directory `dist`. Done.

## Custom domain (optional, ~₹700–1,000/year)
Buy a domain, then add it in Pages/Vercel/Netlify settings and point the DNS records they show.
