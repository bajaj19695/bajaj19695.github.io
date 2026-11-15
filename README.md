# Deepanshu Bajaj — Portfolio

My developer portfolio. A single-page site built with React 19 + Vite + Tailwind CSS v4 (no
other UI libraries) that walks through who I am, what I've shipped, and how I like to work.

## About me

Senior Software Developer based in Delhi, India. 5+ years building React Native apps for
Android and iOS, with a focus on code that talks to real hardware — BLE, NFC, DFU firmware
upgrades, camera and geolocation integrations. Full-stack on the web side too, with React 19
and Nest.js APIs behind the mobile clients. I mentor developers and work directly with clients
rather than through a layer of management. Currently looking for senior React Native / full-stack
roles, especially ones where mobile meets hardware.

## What's on the site

- **Hero** — name, pitch and an inline-SVG illustration of a phone's BLE device list wired up to
  an IoT unit and an API, which is the shape of most of my work.
- **Stats** — 5+ years in production, 50+ store releases on one app, a 40% app-size cut
  (100 → 60 MB), 10+ developers trained.
- **Projects** — four case studies: **PCX (PortaConX)**, a portable-sanitation IoT platform where
  I own the BLE telemetry pipeline and the API contract across Nest.js/React/React Native;
  **CoolR Mobile**, a long-running retail field app with a BLE command protocol for smart camera
  devices and DFU firmware upgrades; **Steris IMS Ready Tracker**, a ~130-screen legacy React app
  modernised to React 19 + Vite + MUI v7; and **Tailored Logistics**, a logistics platform and
  driver app with Gemini-assisted dispatch. No confidential details, screenshots or endpoints —
  happy to go deeper in an interview.
- **Architecture diagram** — the pattern underneath most of my projects: Device (BLE/NFC) →
  React Native app → Nest.js API → Database → React web dashboard.
- **Skills** — grouped by Mobile, IoT & Devices, Web, Backend, Release & Practice, and AI tooling.
- **Public projects** — [Bluetooth-Manager](https://github.com/bajaj19695/Bluetooth-Manager) and
  the in-progress `ble-telemetry-hub`.
- **Leadership** — code review, mentoring, and working directly with clients.
- **Contact** — email only; no phone number is published anywhere on the site.

## Editing content

**All text lives in [`src/data.js`](src/data.js).** Components never need to change when the
wording, projects, or section order do.

| What | Where in `src/data.js` |
| --- | --- |
| Name, role, pitch, links, photo | `profile` |
| Top-nav links | `nav` |
| Hero buttons | `heroActions` |
| Labels inside the hero drawing | `heroArt` |
| Stats row | `stats` |
| Section headings and intros | `sections` |
| Case studies | `projectList` |
| Architecture diagram boxes | `architecture` |
| Skill groups | `skills` |
| Public projects | `openSource` |
| Leadership bullets | `leadership` |
| Contact copy and facts | `contact` |

The `icon` fields must match a key in [`src/components/icons.jsx`](src/components/icons.jsx) —
open that file to see the available names.

### Two things to add myself

1. **Resume** — a public copy (no phone number) belongs in `public/` as
   `Deepanshu_Bajaj_CV.pdf`. `profile.resume` in `src/data.js` points to that exact name —
   keep the two in sync if the filename ever changes.
2. **Photo (optional)** — drop an image in `public/` and set `profile.photo = './photo.jpg'`.
   Left as `''`, the circular photo slot stays hidden.

### ANONYMIZE

Set `ANONYMIZE = true` at the top of `src/data.js` if a client's NDA requires it. Project titles
switch to the neutral `generic` description and the subtitle switches to the `kind` label —
nothing else changes.

## Stack and constraints

- React 19, Vite, Tailwind CSS v4 — no other UI or component libraries.
- Light theme: off-white canvas, white cards, one indigo accent, dark slate text.
- Responsive from 360 px to 1440 px with no horizontal scroll. The architecture diagram renders
  left-to-right on tablets and up, stacked on phones.
- Fade-in on scroll is pure CSS (`animation-timeline: view()`), with `prefers-reduced-motion`
  respected and no JavaScript involved.
- Semantic landmarks, a skip link, alt text, visible focus rings, and AA contrast throughout.
- Deploys as-is to GitHub Pages, Vercel or Netlify (`vite.config.js` uses `base: './'`);
  [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) publishes to GitHub Pages on
  every push to `main`.
- For richer social previews, add a 1200×630 `public/og-image.png` and uncomment the `og:image`
  tags in [`index.html`](index.html).
