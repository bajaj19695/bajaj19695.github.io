import { architecture, sections } from '../data.js'
import { Reveal, Section, SectionHeading } from './layout.jsx'
import { IconGlyph } from './icons.jsx'

// Device → React Native app → Nest.js API → Database → React dashboard.
// Rendered twice from the same data: left-to-right on wide screens, stacked on
// narrow ones, so nothing is ever squeezed below legibility.

const NODES = architecture.nodes
const FLOW = NODES.map((n) => n.lines.join(' ')).join(' → ')

function Arrow({ id }) {
  return (
    <marker
      id={id}
      viewBox="0 0 10 10"
      refX="8.5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse"
    >
      <path d="M0 0 10 5 0 10z" fill="#94a3b8" />
    </marker>
  )
}

function Card({ x, y, w, h }) {
  return <rect x={x} y={y} width={w} height={h} rx="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
}

function Badge({ x, y, name }) {
  return (
    <>
      <rect x={x} y={y} width="36" height="36" rx="10" fill="#eef2ff" />
      <svg x={x + 7} y={y + 7} width="22" height="22" viewBox="0 0 24 24" className="text-brand">
        <IconGlyph name={name} />
      </svg>
    </>
  )
}

function Horizontal() {
  return (
    <svg viewBox="0 0 1024 176" className="hidden h-auto w-full md:block" role="img" aria-label={FLOW}>
      <defs>
        <Arrow id="archArrowH" />
      </defs>
      {NODES.map((n, i) => {
        const x = 12 + i * 210
        const two = n.lines.length > 1
        return (
          <g key={n.caption}>
            <Card x={x} y={40} w={160} h={108} />
            <Badge x={x + 62} y={56} name={n.icon} />
            {n.lines.map((line, li) => (
              <text
                key={line}
                x={x + 80}
                y={(two ? 112 : 119) + li * 16}
                textAnchor="middle"
                fontSize="14.5"
                fontWeight="700"
                fill="#0f172a"
              >
                {line}
              </text>
            ))}
            <text x={x + 80} y={two ? 143 : 137} textAnchor="middle" fontSize="11" fill="#64748b">
              {n.caption}
            </text>
            {i < NODES.length - 1 && (
              <line
                x1={x + 172}
                y1="94"
                x2={x + 198}
                y2="94"
                stroke="#cbd5e1"
                strokeWidth="2"
                markerEnd="url(#archArrowH)"
              />
            )}
          </g>
        )
      })}
    </svg>
  )
}

function Vertical() {
  return (
    <svg viewBox="0 0 320 630" className="mx-auto h-auto w-full max-w-sm md:hidden" role="img" aria-label={FLOW}>
      <defs>
        <Arrow id="archArrowV" />
      </defs>
      {NODES.map((n, i) => {
        const y = 8 + i * 128
        return (
          <g key={n.caption}>
            <Card x={32} y={y} w={256} h={92} />
            <Badge x={48} y={y + 28} name={n.icon} />
            <text x={100} y={y + 42} fontSize="15" fontWeight="700" fill="#0f172a">
              {n.lines.join(' ')}
            </text>
            <text x={100} y={y + 62} fontSize="11.5" fill="#64748b">
              {n.caption}
            </text>
            {i < NODES.length - 1 && (
              <line
                x1="160"
                y1={y + 102}
                x2="160"
                y2={y + 118}
                stroke="#cbd5e1"
                strokeWidth="2"
                markerEnd="url(#archArrowV)"
              />
            )}
          </g>
        )
      })}
    </svg>
  )
}

export default function Architecture() {
  const { kicker, title, intro } = sections.architecture
  return (
    <Section id="architecture" tinted>
      <SectionHeading kicker={kicker} title={title} intro={intro} />
      <Reveal className="mt-12">
        <figure className="rounded-2xl border border-line bg-canvas p-5 shadow-sm sm:p-8">
          <Horizontal />
          <Vertical />
          <figcaption className="mt-6 border-t border-line pt-5 text-center text-sm text-muted">
            {architecture.note}
          </figcaption>
        </figure>
      </Reveal>
    </Section>
  )
}
