import { footer, nav, profile } from '../data.js'
import { Container } from './layout.jsx'
import { Icon } from './icons.jsx'

const socials = [
  { name: 'GitHub', icon: 'github', href: profile.github },
  { name: 'LinkedIn', icon: 'linkedin', href: profile.linkedin },
  { name: 'Email', icon: 'mail', href: `mailto:${profile.email}` },
]

// Read once at module load rather than on every render.
const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line bg-card">
      <Container className="py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="flex items-center gap-2.5 text-[15px] font-bold tracking-tight text-ink">
              <span
                aria-hidden="true"
                className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-[13px] font-bold text-white"
              >
                DB
              </span>
              {profile.name}
            </p>
            <p className="mt-3 text-sm text-muted">
              {profile.role} · {profile.location}
            </p>
            <p className="mt-1 text-sm text-muted">{footer.note}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-1 sm:text-right">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="rounded text-sm text-body transition-colors hover:text-brand">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {YEAR} {profile.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-2">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  {...(s.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer' })}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-canvas text-body transition-colors hover:border-brand-ring hover:text-brand"
                >
                  <Icon name={s.icon} className="h-[18px] w-[18px]" label={s.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
