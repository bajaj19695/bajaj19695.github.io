// Small shared building blocks: the page container, section shells, the
// scroll-reveal wrapper and the tech chip.

/**
 * Fade-in-on-scroll wrapper. The animation itself is pure CSS (see index.css);
 * this exists as a wrapper so that card hover transforms are never overridden
 * by the animation's own transform.
 */
export function Reveal({ children, className = '' }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

export function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

export function Section({ id, children, className = '', tinted = false }) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-16 sm:py-24 ${tinted ? 'border-y border-line bg-card' : ''} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  )
}

export function SectionHeading({ kicker, title, intro, id }) {
  return (
    <Reveal className="max-w-2xl">
      {kicker && (
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide text-brand uppercase">
          <span aria-hidden="true" className="h-px w-6 bg-brand-ring" />
          {kicker}
        </p>
      )}
      <h2 id={id} className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">{intro}</p>}
    </Reveal>
  )
}

export function Chip({ children }) {
  return (
    <span className="rounded-full border border-line bg-canvas px-2.5 py-1 text-xs font-medium text-body">
      {children}
    </span>
  )
}
