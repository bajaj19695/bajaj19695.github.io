// ---------------------------------------------------------------------------
// ALL SITE CONTENT LIVES HERE. Edit this file only — never the components.
//
// Icon names (the `icon` fields) must match a key in src/components/icons.jsx.
// ---------------------------------------------------------------------------

// Set to true to hide client / product names and show the neutral `generic`
// description instead. Use this if an NDA does not allow naming clients.
export const ANONYMIZE = false

export const profile = {
  name: 'Deepanshu Bajaj',
  role: 'Senior Software Developer',
  // Short label under the name in the hero.
  focus: 'React Native · BLE / IoT · React + Nest.js',
  // The one-line pitch in the hero.
  pitch:
    'I build React Native apps that talk to real hardware over BLE, NFC and cameras — and the React and Nest.js systems behind them.',
  location: 'Delhi, India',
  email: 'bajaj19695@gmail.com',
  linkedin: 'https://www.linkedin.com/in/deepanshu-bajaj-294086a8/',
  github: 'https://github.com/bajaj19695',
  // Public copy of the CV (no phone number), served from /public.
  resume: './Deepanshu_Bajaj_CV.pdf',
  // OPTIONAL circular photo. Put the image in /public and set e.g. './photo.jpg'.
  // Leave as an empty string to hide the photo slot entirely.
  photo: '',
  photoAlt: 'Deepanshu Bajaj',
  // Small line shown above the name.
  availability: 'Open to senior roles',
}

// Sticky top-nav links. `compact: true` items also show on small screens.
export const nav = [
  { label: 'Projects', href: '#projects', compact: true },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Skills', href: '#skills', compact: true },
  { label: 'Open source', href: '#open-source' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact', compact: true },
]

// Hero buttons. variant: 'primary' | 'secondary'
export const heroActions = [
  { label: 'Contact me', href: `mailto:${profile.email}`, icon: 'mail', variant: 'primary' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin', variant: 'secondary', external: true },
  { label: 'GitHub', href: profile.github, icon: 'github', variant: 'secondary', external: true },
  { label: 'Resume', href: profile.resume, icon: 'download', variant: 'secondary', external: true },
]

// Text inside the hero illustration (the phone / device / API drawing).
export const heroArt = {
  title: 'Nearby devices',
  badge: 'Scanning',
  devices: [
    { name: 'DEV-0421', state: 'Connected', connected: true },
    { name: 'SENSOR-18B', state: 'Tap to pair' },
    { name: 'UNIT-77C', state: 'Tap to pair' },
  ],
  device: { label: 'IoT unit', sub: 'BLE / NFC' },
  cloud: { label: 'API', sub: 'Nest.js' },
  caption: 'Phone → device → API: the loop I work in every day.',
}

export const stats = [
  { value: '5+', label: 'years in production', icon: 'calendar' },
  { value: '50+', label: 'store releases (one app)', icon: 'rocket' },
  { value: '40%', label: 'app size cut (100 → 60 MB)', icon: 'trendingDown' },
  { value: '10+', label: 'developers trained', icon: 'users' },
]

// Headings and intro copy for each section.
export const sections = {
  projects: {
    title: 'Selected work',
    kicker: 'Case studies',
    intro:
      'Client and employer code is private, so these are short case studies focused on what I built and the decisions behind it. Happy to walk through the detail in an interview.',
  },
  architecture: {
    title: 'How my work fits together',
    kicker: 'Architecture',
    intro:
      'Most of my projects are the same shape: a physical device, a React Native app that speaks its protocol, an API that stores what comes back, and a web dashboard on top. I have shipped every box in this diagram.',
  },
  skills: { title: 'Skills', kicker: 'Toolkit', intro: 'Tools I use regularly in production, grouped by where they sit.' },
  openSource: {
    title: 'Public projects',
    kicker: 'GitHub',
    intro: 'Smaller things I can share publicly, built outside client work.',
  },
  leadership: {
    title: 'Leadership & mentoring',
    kicker: 'Working with people',
    intro: 'Beyond writing code, this is the part of the job I enjoy most.',
  },
  contact: { title: 'Get in touch', kicker: 'Contact' },
}

const projectList = [
  {
    name: 'PCX (PortaConX)',
    generic: 'Portable sanitation IoT platform',
    kind: 'IoT platform · mobile + web',
    period: 'Jan 2026 – Present',
    icon: 'bluetooth',
    gradient: ['#4f46e5', '#7c3aed'],
    summary:
      'Main developer on the mobile and web apps of an IoT platform for portable sanitation units. I own the API contract and data model across the Nest.js backend, the React web app and the React Native client.',
    points: [
      'Built the end-to-end BLE telemetry pipeline: binary payloads decoded, stored, and surfaced in a 38-column telemetry grid.',
      'Device status (firmware, connectivity, battery), map view, service stops, NFC wake-up and QR scanning.',
      '20+ internal releases before public launch, working directly with the client and reviewing the team’s code.',
    ],
    tech: ['React Native', 'React', 'Nest.js', 'BLE', 'NFC', 'QR'],
  },
  {
    name: 'CoolR Mobile',
    generic: 'IoT retail intelligence field app',
    kind: 'Field app · BLE + firmware',
    period: '2022 – 2026',
    icon: 'camera',
    gradient: ['#0ea5e9', '#4f46e5'],
    summary:
      'Long-term mobile engineer on a field-execution app used by reps in several countries. The app connects over BLE to smart camera devices installed in retail coolers.',
    points: [
      'Designed the BLE command protocol work: scanning, connection handling, command dispatch, response parsing and live UI updates.',
      'Device firmware upgrades (DFU), the install wizard, offline survey sync and image-recognition flows.',
      'Took React Native 0.76 → 0.86, automated releases with Fastlane (50+ store releases) and cut the app from 100 MB to 60 MB.',
    ],
    tech: ['React Native', 'BLE', 'DFU', 'Fastlane', 'Offline sync'],
  },
  {
    name: 'Steris IMS Ready Tracker',
    generic: 'Legacy React modernisation (~130 screens)',
    kind: 'Modernisation · ~130 screens',
    period: 'Aug 2026 – Present',
    icon: 'layers',
    gradient: ['#6366f1', '#a855f7'],
    summary:
      'Led the upgrade of a large legacy React application to React 19 and Vite, replacing an end-of-life UI library with MUI v7 across roughly 130 screens.',
    points: [
      'Simplified the Redux store from 53 slices to 11 and removed 20 redundant packages.',
      'Introduced TanStack Query caching and route-level error boundaries.',
      'Wrote the analysis and design documents, then mentored two developers through the upgrade.',
    ],
    tech: ['React 19', 'Vite', 'MUI v7', 'TanStack Query', 'Redux'],
  },
  {
    name: 'Tailored Logistics',
    generic: 'Logistics platform and driver app',
    kind: 'Full-stack · AI-assisted dispatch',
    period: '2022 – 2023, 2026',
    icon: 'mapPin',
    gradient: ['#4f46e5', '#0d9488'],
    summary:
      'Full-stack work on a trucking logistics platform and its React Native driver app, including an AI-assisted dispatch feature.',
    points: [
      'Live dispatch recommendations — best route, cost and driver — using the Gemini API with Google Maps.',
      'Load-posting integrations, settlements, invoicing and SQL query optimisation.',
      'Driver app upgrades and releases to both app stores.',
    ],
    tech: ['React Native', 'C#', 'Ext JS', 'Gemini API', 'Google Maps'],
  },
]

// `title` is resolved here so components never need to know about ANONYMIZE.
export const projects = projectList.map((p) => ({
  ...p,
  title: ANONYMIZE ? p.generic : p.name,
  subtitle: ANONYMIZE ? p.kind : p.generic,
}))

// The architecture diagram, left to right (top to bottom on mobile).
export const architecture = {
  nodes: [
    { icon: 'bluetooth', lines: ['Device'], caption: 'BLE / NFC' },
    { icon: 'smartphone', lines: ['React Native', 'app'], caption: 'iOS + Android' },
    { icon: 'server', lines: ['Nest.js API'], caption: 'REST + WebSockets' },
    { icon: 'database', lines: ['Database'], caption: 'Telemetry store' },
    { icon: 'monitor', lines: ['React', 'dashboard'], caption: 'React 19 + Vite' },
  ],
  note: 'Binary BLE payloads in on the left, decoded telemetry and a usable dashboard out on the right.',
}

export const skills = [
  {
    group: 'Mobile',
    icon: 'smartphone',
    items: ['React Native', 'Android & iOS', 'Native modules', 'Permissions', 'Push notifications', 'Performance'],
  },
  {
    group: 'IoT & Devices',
    icon: 'bluetooth',
    items: ['BLE', 'NFC', 'DFU firmware upgrades', 'Camera', 'Geolocation'],
  },
  {
    group: 'Web',
    icon: 'monitor',
    items: ['React 19', 'TypeScript', 'Redux', 'TanStack Query', 'Vite', 'MUI'],
  },
  {
    group: 'Backend',
    icon: 'server',
    items: ['Nest.js', 'Node.js', 'REST APIs', 'WebSockets', 'C# / ASP.NET', 'SQL Server', 'MySQL', 'MongoDB'],
  },
  {
    group: 'Release & Practice',
    icon: 'package',
    items: ['Fastlane', 'Firebase Crashlytics', 'Play Store / App Store', 'Code review', 'Unit testing', 'Agile'],
  },
  {
    group: 'AI',
    icon: 'sparkles',
    items: ['Gemini API', 'Claude Code', 'ChatGPT', 'Codex'],
  },
]

export const openSource = [
  {
    name: 'Bluetooth-Manager',
    desc: 'A public BLE scanning and connection utility — the piece I reach for first when a new device needs talking to.',
    url: 'https://github.com/bajaj19695/Bluetooth-Manager',
    icon: 'bluetooth',
    status: null,
  },
  {
    name: 'ble-telemetry-hub',
    desc: 'A BLE payload decoder and telemetry API built from scratch against synthetic data, so the whole pipeline can be shown without touching client code.',
    url: null,
    icon: 'server',
    status: 'In progress',
  },
]

export const leadership = [
  { text: 'Assigned code reviewer for 4–5 developers, and I interview candidates.', icon: 'gitBranch' },
  { text: 'Trained and led 10+ junior developers in React Native and C# over five years.', icon: 'users' },
  { text: 'Work directly with domestic and international clients on requirements and status.', icon: 'globe' },
  { text: 'Sole mobile engineer when needed; also lead in teams of up to three.', icon: 'briefcase' },
]

export const contact = {
  body:
    'I’m looking for senior React Native and full-stack roles, especially where mobile meets hardware. Email is the quickest way to reach me, and I reply to everything.',
  cta: 'Email me',
  // Small facts shown beside the contact call to action.
  facts: [
    { label: 'Based in', value: profile.location, icon: 'mapPin' },
    { label: 'Looking for', value: 'Senior React Native / full-stack', icon: 'briefcase' },
    { label: 'Best at', value: 'Mobile + hardware (BLE, NFC, DFU)', icon: 'bluetooth' },
  ],
}

export const footer = {
  note: 'Built with React, Vite and Tailwind CSS.',
}
