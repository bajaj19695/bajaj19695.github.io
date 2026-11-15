import { heroActions, heroArt, profile } from '../data.js'
import { Container, Reveal } from './layout.jsx'
import { Icon } from './icons.jsx'
import HeroArt from './HeroArt.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* very soft wash behind the whole hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-brand-soft/70 via-canvas to-canvas"
      />
      <Container className="relative pt-12 pb-16 sm:pt-16 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* ---------------- left: the words ---------------- */}
          <Reveal>
            <div className="flex flex-col items-start">
              {/* Optional photo — hidden unless profile.photo is set. */}
              {profile.photo && (
                <img
                  src={profile.photo}
                  alt={profile.photoAlt}
                  width="96"
                  height="96"
                  className="mb-6 h-24 w-24 rounded-full border-4 border-white object-cover shadow-md"
                />
              )}

              {profile.availability && (
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-ring bg-white/80 px-3 py-1.5 text-xs font-semibold text-brand-dark">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
                  {profile.availability}
                </p>
              )}

              <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">{profile.name}</h1>

              <p className="mt-3 text-lg font-semibold text-brand sm:text-xl">{profile.role}</p>
              <p className="mt-1 text-sm font-medium text-muted">{profile.focus}</p>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg">{profile.pitch}</p>

              <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted">
                <Icon name="mapPin" className="h-4 w-4" />
                {profile.location}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {heroActions.map((a) => {
                  const primary = a.variant === 'primary'
                  return (
                    <a
                      key={a.label}
                      href={a.href}
                      {...(a.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className={
                        primary
                          ? 'inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark'
                          : 'inline-flex items-center gap-2 rounded-xl border border-line bg-card px-5 py-3 text-sm font-semibold text-body shadow-sm transition-colors hover:border-brand-ring hover:text-brand'
                      }
                    >
                      <Icon name={a.icon} className="h-4 w-4" />
                      {a.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </Reveal>

          {/* ---------------- right: the illustration ---------------- */}
          <Reveal className="lg:pl-4">
            <div className="mx-auto max-w-md lg:max-w-none">
              <HeroArt />
              <p className="mt-4 text-center text-sm text-muted">{heroArt.caption}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
