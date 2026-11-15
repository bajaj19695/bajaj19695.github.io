import { leadership, sections } from '../data.js'
import { Reveal, Section, SectionHeading } from './layout.jsx'
import { Icon } from './icons.jsx'

export default function Leadership() {
  const { kicker, title, intro } = sections.leadership
  return (
    <Section id="leadership">
      <SectionHeading kicker={kicker} title={title} intro={intro} />
      <ul className="mt-12 grid gap-5 sm:grid-cols-2">
        {leadership.map((l) => (
          <li key={l.text}>
            <Reveal className="h-full">
              <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-card p-6 shadow-sm transition-all duration-300 hover:border-brand-ring hover:shadow-lg">
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand"
                >
                  <Icon name={l.icon} className="h-5 w-5" />
                </span>
                <p className="text-[15px] leading-relaxed text-body">{l.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
