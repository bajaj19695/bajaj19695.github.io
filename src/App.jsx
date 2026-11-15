import { ANONYMIZE, profile, stats, projects, openSource, skills, leadership } from './data.js'

const nav = ['projects', 'skills', 'open-source', 'leadership', 'contact']

function Section({ id, cmd, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-14 border-t border-line">
      <h2 className="text-accent text-sm mb-8">
        <span className="text-dim">$ </span>{cmd}
      </h2>
      {children}
    </section>
  )
}

function Tag({ children }) {
  return <span className="text-xs px-2 py-0.5 rounded border border-line text-dim">{children}</span>
}

function Project({ p }) {
  const title = ANONYMIZE ? p.generic : p.name
  return (
    <article className="rounded-lg border border-line bg-panel p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg text-fg font-semibold">{title}</h3>
        <span className="text-xs text-amber">{p.period}</span>
      </div>
      {!ANONYMIZE && <p className="text-xs text-dim mt-1">{p.generic}</p>}
      <p className="mt-4 text-sm leading-relaxed">{p.summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-fg/90">
        {p.points.map((x) => (
          <li key={x} className="flex gap-2"><span className="text-accent">›</span><span>{x}</span></li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
    </article>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 bg-bg/90 backdrop-blur border-b border-line">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="#top" className="text-accent text-sm">&gt;_ deepanshu</a>
          <nav className="hidden sm:flex gap-5 text-xs text-dim">
            {nav.map((n) => <a key={n} href={`#${n}`} className="hover:text-accent">{n}</a>)}
          </nav>
          <a href={profile.resume} className="text-xs px-3 py-1.5 rounded border border-accent text-accent hover:bg-accent hover:text-bg transition-colors">resume.pdf</a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-4xl px-4 sm:px-6">
        <section className="pt-16 pb-14">
          <p className="text-dim text-sm"><span className="text-accent">$</span> whoami</p>
          <h1 className="mt-4 text-3xl sm:text-5xl font-bold text-fg cursor">{profile.name}</h1>
          <p className="mt-3 text-accent">{profile.role} · React Native · BLE / IoT</p>
          <p className="mt-6 max-w-2xl text-fg/90 leading-relaxed">{profile.tagline}</p>
          <p className="mt-2 text-xs text-dim">{profile.location}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a href={`mailto:${profile.email}`} className="px-4 py-2 rounded bg-accent text-bg font-semibold hover:opacity-90">Get in touch</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 rounded border border-line hover:border-accent">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded border border-line hover:border-accent">GitHub</a>
          </div>
          <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-line bg-panel p-4">
                <dt className="text-2xl text-accent font-bold">{s.value}</dt>
                <dd className="text-xs text-dim mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Section id="projects" cmd="ls ./projects --production">
          <p className="text-sm text-dim mb-6 max-w-2xl">Client and employer code is private, so these are short case studies. I'm happy to walk through the details in an interview.</p>
          <div className="space-y-5">{projects.map((p) => <Project key={p.name} p={p} />)}</div>
        </Section>

        <Section id="skills" cmd="cat skills.json">
          <div className="grid sm:grid-cols-2 gap-5">
            {Object.entries(skills).map(([k, v]) => (
              <div key={k} className="rounded-lg border border-line bg-panel p-4">
                <h3 className="text-sm text-amber mb-3">{k}</h3>
                <div className="flex flex-wrap gap-2">{v.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="open-source" cmd="git log --public">
          <div className="grid sm:grid-cols-2 gap-5">
            {openSource.map((o) => (
              <div key={o.name} className="rounded-lg border border-line bg-panel p-5">
                <h3 className="text-fg font-semibold">{o.name}</h3>
                <p className="text-sm text-dim mt-2">{o.desc}</p>
                {o.url && <a href={o.url} target="_blank" rel="noreferrer" className="inline-block mt-4 text-sm text-accent hover:underline">view on GitHub →</a>}
              </div>
            ))}
          </div>
        </Section>

        <Section id="leadership" cmd="cat team.md">
          <ul className="space-y-3 text-sm">
            {leadership.map((x) => (
              <li key={x} className="flex gap-2"><span className="text-accent">›</span><span>{x}</span></li>
            ))}
          </ul>
        </Section>

        <Section id="contact" cmd="mail --to deepanshu">
          <p className="text-sm max-w-xl leading-relaxed">Open to senior React Native and full-stack roles, especially where mobile meets hardware. The quickest way to reach me is email.</p>
          <a href={`mailto:${profile.email}`} className="inline-block mt-5 text-accent text-lg hover:underline">{profile.email}</a>
        </Section>
      </main>

      <footer className="border-t border-line py-8 text-center text-xs text-dim">
        © {new Date().getFullYear()} Deepanshu Bajaj · built with React, Vite and Tailwind
      </footer>
    </div>
  )
}
