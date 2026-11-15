import { whatsappHref } from '../data.js'
import { Icon } from './icons.jsx'

// Fixed bottom-right stack. Email always shows (jumps to the contact form);
// WhatsApp only appears once profile.whatsappNumber is set in data.js.
export default function FloatingContact() {
  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {whatsappHref && (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
        >
          <Icon name="whatsapp" className="h-6 w-6" label="Chat on WhatsApp" />
        </a>
      )}
      <a
        href="#contact"
        className="grid h-14 w-14 place-items-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-105"
      >
        <Icon name="mail" className="h-6 w-6" label="Email me" />
      </a>
    </div>
  )
}
