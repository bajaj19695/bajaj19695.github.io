import { nav, profile } from '../data.js'
import { Container } from './layout.jsx'
import { Icon } from './icons.jsx'

export default function Nav() {
  const compact = nav.filter((n) => n.compact)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2.5 rounded-lg text-[15px] font-bold tracking-tight text-ink"
          >
            <span
              aria-hidden="true"
              className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-[13px] font-bold text-white"
            >
              DB
            </span>
            <span className="hidden sm:inline">Deepanshu Bajaj</span>
          </a>

          {/* Full link set on large screens, the key three on small ones. */}
          <nav aria-label="Sections" className="flex items-center">
            <ul className="hidden items-center gap-1 sm:flex lg:hidden">
              {compact.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-body transition-colors hover:bg-brand-soft hover:text-brand"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="hidden items-center gap-1 lg:flex">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-body transition-colors hover:bg-brand-soft hover:text-brand"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark sm:px-4"
          >
            <Icon name="download" className="h-4 w-4" />
            Resume
          </a>
        </div>
      </Container>
    </header>
  )
}
