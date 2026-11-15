# Deepanshu Bajaj — Portfolio

Single-page developer portfolio. React 19 + Vite + Tailwind CSS v4, no other UI libraries.
Clean light theme, inline-SVG illustrations, no runtime dependencies beyond React.

## Editing content

**All text lives in [`src/data.js`](src/data.js).** You never need to open a component to change
wording, add a project, or reorder sections.

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

### Two things to add yourself

1. **Resume** — drop a public copy (no phone number) at `public/resume.pdf`. Until you do,
   the Resume buttons will 404.
2. **Photo (optional)** — put an image in `public/` and set `profile.photo = './photo.jpg'`.
   Leave it as `''` and the circular photo slot stays hidden.

### ANONYMIZE

Set `ANONYMIZE = true` at the top of `src/data.js` if an NDA stops you naming clients. Project
titles switch to the neutral `generic` description and the subtitle switches to the `kind` label.
Nothing else needs to change.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
npm run preview  # serve the built site
npm run lint
```

## Deploying

`vite.config.js` sets `base: './'`, so the build uses relative paths and works unchanged on all
three hosts below.

**GitHub Pages** — push to `main`, then set *Settings → Pages → Source* to **GitHub Actions**.
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes on every push.
The site goes live at `https://bajaj19695.github.io`.

**Vercel / Netlify** — import the repo. Build command `npm run build`, output directory `dist`.

## Notes

- Responsive from 360 px to 1440 px with no horizontal scroll. The architecture diagram renders
  left-to-right on tablets and up, stacked on phones.
- Fade-in on scroll is pure CSS (`animation-timeline: view()`). Browsers without support, and
  anyone with `prefers-reduced-motion`, get the finished state immediately — no flash of hidden
  content, no JavaScript.
- Semantic landmarks, a skip link, alt text, visible focus rings, and AA contrast throughout.
- For richer social previews, add a 1200×630 `public/og-image.png` and uncomment the `og:image`
  tags in [`index.html`](index.html).
