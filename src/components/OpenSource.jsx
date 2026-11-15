import { openSource, profile, sections } from '../data.js'
import { Reveal, Section, SectionHeading } from './layout.jsx'
import { Icon } from './icons.jsx'

export default function OpenSource() {
  const { kicker, title, intro } = sections.openSource

  return (
    <Section id="open-source" tinted>
      <SectionHeading kicker={kicker} title={title} intro={intro} />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {openSource.map((o) => (
          <Reveal key={o.name} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-line bg-canvas p-6 shadow-sm transition-all duration-300 hover:border-brand-ring hover:shadow-lg sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand"
                >
                  <Icon name={o.icon} className="h-5 w-5" />
                </span>
                {o.status && (
                  <span className="rounded-full border border-line bg-card px-2.5 py-1 text-xs font-semibold text-muted">
                    {o.status}
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-lg font-bold tracking-tight text-ink">{o.name}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-body">{o.desc}</p>

              {o.url ? (
                <a
                  href={o.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 self-start rounded-lg text-sm font-semibold text-brand hover:text-brand-dark hover:underline"
                >
                  View on GitHub
                  <Icon name="externalLink" className="h-4 w-4" />
                </a>
              ) : (
                <p className="mt-5 text-sm font-medium text-muted">Not public yet — happy to demo it.</p>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-line bg-canvas px-5 py-3 text-sm font-semibold text-body shadow-sm transition-colors hover:border-brand-ring hover:text-brand"
        >
          <Icon name="github" className="h-4 w-4" />
          See everything on GitHub
        </a>
      </Reveal>
    </Section>
  )
}
