import { stats } from '../data.js'
import { Container, Reveal } from './layout.jsx'
import { Icon } from './icons.jsx'

export default function Stats() {
  return (
    <section aria-label="Track record" className="border-y border-line bg-card">
      <Container className="py-12 sm:py-14">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {stats.map((s) => (
              /* dt before dd keeps the markup valid; `order` flips them visually. */
              <div key={s.label} className="flex flex-col items-start">
                <span
                  aria-hidden="true"
                  className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <dt className="order-2 mt-1.5 text-sm leading-snug text-muted">{s.label}</dt>
                <dd className="order-1 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  )
}
