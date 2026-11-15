import { projects, sections } from '../data.js'
import { Chip, Reveal, Section, SectionHeading } from './layout.jsx'
import { Icon } from './icons.jsx'

function ProjectCard({ p, index }) {
  const [from, to] = p.gradient
  const dotsId = `dots-${index}`

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-ring hover:shadow-lg">
      {/* gradient header, unique per project */}
      <div className="relative h-24" style={{ backgroundImage: `linear-gradient(115deg, ${from}, ${to})` }}>
        <svg
          aria-hidden="true"
          viewBox="0 0 400 96"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <pattern id={dotsId} width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.1" fill="#ffffff" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="400" height="96" fill={`url(#${dotsId})`} />
          <g fill="none" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="1.5">
            <circle cx="350" cy="48" r="26" />
            <circle cx="350" cy="48" r="45" />
            <circle cx="350" cy="48" r="64" />
          </g>
        </svg>
        <span className="absolute top-4 right-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {p.period}
        </span>
      </div>

      {/* icon badge straddling the header edge */}
      <span
        aria-hidden="true"
        className="absolute top-[4.25rem] left-6 grid h-14 w-14 place-items-center rounded-2xl border border-line bg-card shadow-md"
        style={{ color: from }}
      >
        <Icon name={p.icon} className="h-7 w-7" />
      </span>

      <div className="flex flex-1 flex-col p-6 pt-12 sm:p-7 sm:pt-12">
        <p className="text-xs font-semibold tracking-wide text-muted uppercase">{p.subtitle}</p>
        <h3 className="mt-1.5 text-xl font-bold tracking-tight text-ink sm:text-2xl">{p.title}</h3>

        <p className="mt-3 text-[15px] leading-relaxed text-body">{p.summary}</p>

        <ul className="mt-5 space-y-2.5">
          {p.points.map((pt) => (
            <li key={pt} className="flex gap-2.5 text-[15px] leading-relaxed text-body">
              <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-brand" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2 pt-1">
          {p.tech.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const { kicker, title, intro } = sections.projects
  return (
    <Section id="projects">
      <SectionHeading kicker={kicker} title={title} intro={intro} />
      <div className="mt-12 grid gap-6 sm:gap-7 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} className="h-full">
            <ProjectCard p={p} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
