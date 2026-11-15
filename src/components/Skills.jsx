import { sections, skills } from '../data.js'
import { Chip, Reveal, Section, SectionHeading } from './layout.jsx'
import { Icon } from './icons.jsx'

export default function Skills() {
  const { kicker, title, intro } = sections.skills
  return (
    <Section id="skills">
      <SectionHeading kicker={kicker} title={title} intro={intro} />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <li key={group.group}>
            <Reveal className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-ring hover:shadow-lg">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white"
                >
                  <Icon name={group.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-ink">{group.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
