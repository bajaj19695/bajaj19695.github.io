import { useState } from 'react'
import { contact, profile, sections, whatsappHref } from '../data.js'
import { Container, Reveal } from './layout.jsx'
import { Icon } from './icons.jsx'

// FormSubmit.co delivers the message straight to profile.email with no backend
// of our own. First submission ever sent to a new address needs a one-time
// confirmation click from that inbox before messages start arriving for real.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`

export default function Contact() {
  const { kicker, title } = sections.contact
  const [from, setFrom] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email: from,
          message,
          _subject: `New message from ${from} via portfolio site`,
          _captcha: 'false',
          _template: 'table',
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setFrom('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

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

                <form onSubmit={handleSubmit} className="mt-8 max-w-md">
                  <label htmlFor="contact-from" className="sr-only">
                    Your email
                  </label>
                  <input
                    id="contact-from"
                    type="email"
                    required
                    placeholder="From: you@example.com"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    disabled={status === 'sending'}
                    className="w-full rounded-xl border border-line bg-card px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-brand-ring focus:outline-none disabled:opacity-60"
                  />
                  <label htmlFor="contact-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={3}
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={status === 'sending'}
                    className="mt-3 w-full resize-y rounded-xl border border-line bg-card px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-brand-ring focus:outline-none disabled:opacity-60"
                  />

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      <Icon name="mail" className="h-4 w-4" />
                      {status === 'sending' ? 'Sending…' : contact.cta}
                    </button>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-line bg-card px-5 py-3 text-sm font-semibold text-body shadow-sm transition-colors hover:border-brand-ring hover:text-brand"
                    >
                      <Icon name="linkedin" className="h-4 w-4" />
                      LinkedIn
                    </a>
                    {whatsappHref && (
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-line bg-card px-5 py-3 text-sm font-semibold text-body shadow-sm transition-colors hover:border-brand-ring hover:text-brand"
                      >
                        <Icon name="whatsapp" className="h-4 w-4" />
                        WhatsApp
                      </a>
                    )}
                  </div>

                  <p role="status" className="mt-3 text-sm">
                    {status === 'sent' && <span className="text-emerald-600">Sent — thanks, I’ll reply by email.</span>}
                    {status === 'error' && (
                      <span className="text-red-600">
                        Something went wrong. Email me directly at{' '}
                        <a href={`mailto:${profile.email}`} className="underline">
                          {profile.email}
                        </a>
                        .
                      </span>
                    )}
                  </p>
                </form>

                <a
                  href={`mailto:${profile.email}`}
                  className="mt-2 inline-block rounded-lg text-base font-semibold break-all text-brand hover:text-brand-dark hover:underline"
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
