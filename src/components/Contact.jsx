import { contact, profile, sections } from '../data.js'
import { Container, Reveal } from './layout.jsx'
import { Icon } from './icons.jsx'

export default function Contact() {
  const { kicker, title } = sections.contact

  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand-ring bg-gradient-to-br from-brand-soft via-card to-card p-8 shadow-sm sm:p-12">
            {/* decorative corner rings */}
            <svg
              aria-hidden="true"
              viewBox="0 0 200 200"
              className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 text-brand opacity-[0.07]"
            >
              <g fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="100" cy="100" r="40" />
                <circle cx="100" cy="100" r="62" />
                <circle cx="100" cy="100" r="84" />
              </g>
            </svg>

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
              <div>
                <p className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide text-brand uppercase">
                  <span aria-hidden="true" className="h-px w-6 bg-brand-ring" />
                  {kicker}
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-body sm:text-lg">{contact.body}</p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
                  >
                    <Icon name="mail" className="h-4 w-4" />
                    {contact.cta}
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-line bg-card px-5 py-3 text-sm font-semibold text-body shadow-sm transition-colors hover:border-brand-ring hover:text-brand"
                  >
                    <Icon name="linkedin" className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>

                <a
                  href={`mailto:${profile.email}`}
                  className="mt-6 inline-block rounded-lg text-base font-semibold break-all text-brand hover:text-brand-dark hover:underline"
                >
                  {profile.email}
                </a>
              </div>

              <dl className="space-y-5 lg:border-l lg:border-line lg:pl-10">
                {contact.facts.map((f) => (
                  <div key={f.label} className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-card text-brand shadow-sm"
                    >
                      <Icon name={f.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <dt className="text-xs font-semibold tracking-wide text-muted uppercase">{f.label}</dt>
                      <dd className="mt-0.5 text-[15px] font-medium text-ink">{f.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
