// ---------------------------------------------------------------
// Everything shown on the site lives here. Edit this file only.
// ---------------------------------------------------------------

// Set to true to hide client/product names (use the "generic" text instead).
// Do this if your contract/NDA does not allow naming clients.
export const ANONYMIZE = false

export const profile = {
  name: 'Deepanshu Bajaj',
  role: 'Senior Software Developer',
  tagline: 'I build React Native apps that talk to real hardware over BLE, NFC and cameras, and the React / Nest.js backends behind them.',
  location: 'Delhi, India',
  email: 'bajaj19695@gmail.com',
  linkedin: 'https://www.linkedin.com/in/deepanshu-bajaj-294086a8/',
  github: 'https://github.com/bajaj19695',
  // Put your PDF in /public as resume.pdf
  resume: './resume.pdf',
}

export const stats = [
  { value: '5+', label: 'years in production' },
  { value: '50+', label: 'store releases (one app)' },
  { value: '40%', label: 'app size cut (100 → 60 MB)' },
  { value: '10+', label: 'developers trained' },
]

export const projects = [
  {
    name: 'PCX (PortaConX)',
    generic: 'Portable sanitation IoT platform',
    period: 'Jan 2026 – Present',
    summary:
      'Main developer on the mobile and web apps of an IoT platform for portable sanitation units. I own the API contract and data model across the Nest.js backend, React web app and React Native client.',
    points: [
      'End-to-end telemetry pipeline: binary BLE payloads decoded, stored and shown in a 38-column telemetry grid.',
      'Device status (firmware, connectivity, battery), map view, service stops, NFC wake-up and QR scanning.',
      '20+ internal releases before public launch; works directly with the client and reviews team code.',
    ],
    tech: ['React Native', 'React', 'Nest.js', 'BLE', 'NFC'],
  },
  {
    name: 'CoolR Mobile',
    generic: 'IoT retail intelligence field app',
    period: '2022 – 2026',
    summary:
      'Long-term mobile engineer on a field-execution app used by field reps in several countries. The app connects over BLE to smart camera devices installed in coolers.',
    points: [
      'BLE command protocol: scanning, connection handling, command dispatch, response parsing and live UI updates.',
      'Device firmware upgrades (DFU), install wizard, offline survey sync and image-recognition flows.',
      'Upgraded React Native 0.76 → 0.86, automated releases with Fastlane (50+ store releases).',
      'Cut the app from 100 MB to 60 MB by removing redundant screens and consolidating flows.',
    ],
    tech: ['React Native', 'BLE', 'DFU', 'Fastlane', 'Offline sync'],
  },
  {
    name: 'Steris IMS Ready Tracker',
    generic: 'Legacy React modernisation (~130 screens)',
    period: 'Aug 2026 – Present',
    summary:
      'Led the upgrade of a large legacy React app to React 19 and Vite, replacing an ancient UI library with MUI v7.',
    points: [
      'Simplified the Redux store from 53 to 11 slices and removed 20 packages.',
      'Added TanStack Query caching and route-level error boundaries.',
      'Wrote the analysis and design docs and mentored two developers through the upgrade.',
    ],
    tech: ['React 19', 'Vite', 'MUI v7', 'TanStack Query', 'Redux'],
  },
  {
    name: 'Tailored Logistics',
    generic: 'Logistics web platform and driver app',
    period: '2022 – 2023, 2026',
    summary:
      'Full-stack work on a trucking logistics platform and its React Native driver app, including an AI-assisted dispatch feature.',
    points: [
      'Live dispatch recommendation: best route, cost and driver, using the Gemini API and Google Maps APIs.',
      'Load-posting integrations, settlements, invoicing and SQL query optimisation.',
      'Driver app upgrades and releases to both app stores.',
    ],
    tech: ['React Native', 'C#', 'Ext JS', 'Gemini API', 'Google Maps'],
  },
]

export const openSource = [
  {
    name: 'Bluetooth-Manager',
    desc: 'Public BLE scanning and connection utility.',
    url: 'https://github.com/bajaj19695/Bluetooth-Manager',
  },
  {
    name: 'ble-telemetry-hub',
    desc: 'In progress: BLE payload decoder and telemetry API built from scratch with synthetic data. Coming soon.',
    url: null,
  },
]

export const skills = {
  Mobile: ['React Native', 'Android & iOS', 'Native modules', 'Permissions', 'Push notifications', 'Performance'],
  'IoT & Devices': ['BLE', 'NFC', 'DFU firmware upgrades', 'Camera', 'Geolocation'],
  Web: ['React 19', 'TypeScript', 'Redux', 'TanStack Query', 'Vite', 'MUI'],
  Backend: ['Nest.js', 'Node.js', 'REST APIs', 'WebSockets', 'C# / ASP.NET', 'SQL Server', 'MySQL', 'MongoDB'],
  'Release & Practice': ['Fastlane', 'Firebase Crashlytics', 'Play Store / App Store', 'Code review', 'Unit testing', 'Agile'],
  AI: ['Gemini API', 'Claude Code', 'ChatGPT', 'Codex'],
}

export const leadership = [
  'Assigned code reviewer for 4–5 developers; interviews candidates.',
  'Trained and led 10+ junior developers in React Native and C# over five years.',
  'Works directly with domestic and international clients on requirements and status.',
  'Sole mobile engineer at times; also leads in teams of up to three.',
]
