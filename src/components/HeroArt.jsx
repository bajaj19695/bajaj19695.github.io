import { heroArt } from '../data.js'
import { IconGlyph } from './icons.jsx'

// A phone showing a BLE device list, linked by dotted connections to an IoT
// unit and the API. Pure inline SVG — no images, no icon library.

const ROW_Y = [140, 200, 260]

function DeviceRow({ y, device }) {
  const on = Boolean(device.connected)
  return (
    <g>
      <rect
        x="72"
        y={y}
        width="160"
        height="50"
        rx="12"
        fill={on ? '#eef2ff' : '#ffffff'}
        stroke={on ? '#c7d2fe' : '#e7ebf1'}
        strokeWidth="1.5"
      />
      <svg x="84" y={y + 12} width="18" height="18" viewBox="0 0 24 24" className="text-brand">
        <IconGlyph name="bluetooth" />
      </svg>
      <text x="110" y={y + 22} fontSize="12" fontWeight="600" fill="#0f172a">
        {device.name}
      </text>
      <text x="110" y={y + 36} fontSize="10" fill={on ? '#4338ca' : '#64748b'}>
        {device.state}
      </text>
      {[0, 1, 2].map((i) => {
        const h = 6 + i * 3
        const lit = on || i === 0
        return (
          <rect
            key={i}
            x={201 + i * 7}
            y={y + 34 - h}
            width="4"
            height={h}
            rx="1.5"
            fill={lit ? '#4f46e5' : '#dbe1ea'}
          />
        )
      })}
    </g>
  )
}

export default function HeroArt() {
  return (
    <svg
      viewBox="0 0 480 404"
      className="h-auto w-full"
      role="img"
      aria-labelledby="heroArtTitle heroArtDesc"
    >
      <title id="heroArtTitle">How the pieces connect</title>
      <desc id="heroArtDesc">
        A phone listing nearby Bluetooth devices, connected by dotted lines to a small IoT unit and to a Nest.js API.
      </desc>

      <defs>
        <radialGradient id="heroBlob" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.38" />
          <stop offset="55%" stopColor="#a5b4fc" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0" />
        </radialGradient>
        <filter id="heroShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#1e293b" floodOpacity="0.1" />
        </filter>
      </defs>

      {/* soft gradient blob behind everything */}
      <ellipse cx="288" cy="198" rx="196" ry="172" fill="url(#heroBlob)" />

      {/* dotted connections */}
      <g
        fill="none"
        stroke="#6366f1"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 7"
        opacity="0.8"
      >
        <path className="flow" d="M262 152C292 152 286 124 312 124" />
        <path className="flow" d="M262 300C292 300 286 307 312 307" />
        <path className="flow" d="M383 166v96" />
      </g>

      {/* ---------------- phone ---------------- */}
      <g filter="url(#heroShadow)">
        <rect x="44" y="36" width="216" height="356" rx="32" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
      </g>
      <rect x="58" y="66" width="188" height="312" rx="22" fill="#f8fafc" />
      <rect x="132" y="48" width="40" height="6" rx="3" fill="#cbd5e1" />

      <text x="76" y="94" fontSize="14" fontWeight="700" fill="#0f172a">
        {heroArt.title}
      </text>
      <rect x="76" y="104" width="84" height="20" rx="10" fill="#eef2ff" />
      <circle cx="87" cy="114" r="3" fill="#4f46e5" />
      <text x="95" y="118" fontSize="10.5" fontWeight="600" fill="#4338ca">
        {heroArt.badge}
      </text>

      {heroArt.devices.slice(0, 3).map((d, i) => (
        <DeviceRow key={d.name} y={ROW_Y[i]} device={d} />
      ))}

      {/* phone bottom bar */}
      <rect x="72" y="330" width="160" height="36" rx="12" fill="#ffffff" stroke="#e7ebf1" strokeWidth="1.5" />
      <rect x="86" y="344" width="34" height="8" rx="4" fill="#4f46e5" opacity="0.85" />
      <rect x="130" y="344" width="34" height="8" rx="4" fill="#dbe1ea" />
      <rect x="174" y="344" width="34" height="8" rx="4" fill="#dbe1ea" />

      {/* ---------------- IoT unit ---------------- */}
      <g fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round">
        <path d="M375 74a10 10 0 0 1 16 0" opacity="0.9" />
        <path d="M369 65a17 17 0 0 1 28 0" opacity="0.55" />
        <path d="M363 56a24 24 0 0 1 40 0" opacity="0.3" />
      </g>
      <g filter="url(#heroShadow)">
        <rect x="316" y="84" width="134" height="80" rx="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
      </g>
      <svg x="332" y="111" width="26" height="26" viewBox="0 0 24 24" className="text-brand">
        <IconGlyph name="cpu" />
      </svg>
      <text x="368" y="118" fontSize="13.5" fontWeight="700" fill="#0f172a">
        {heroArt.device.label}
      </text>
      <text x="368" y="134" fontSize="11" fill="#64748b">
        {heroArt.device.sub}
      </text>

      {/* ---------------- API / cloud ---------------- */}
      <g filter="url(#heroShadow)">
        <rect x="316" y="264" width="134" height="86" rx="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
      </g>
      <svg x="332" y="293" width="28" height="28" viewBox="0 0 24 24" className="text-brand">
        <IconGlyph name="cloud" />
      </svg>
      <text x="370" y="301" fontSize="13.5" fontWeight="700" fill="#0f172a">
        {heroArt.cloud.label}
      </text>
      <text x="370" y="317" fontSize="11" fill="#64748b">
        {heroArt.cloud.sub}
      </text>
    </svg>
  )
}
