import { useEffect, useState } from 'react'
import { Icon } from './icons.jsx'

// index.html runs a blocking inline script that sets the `dark` class on
// <html> before first paint, so this just reads what's already there.
function getInitialTheme() {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0b1220' : '#fafafa')
  }, [theme])

  return (
    <button
      type="button"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-card text-body shadow-sm transition-colors hover:border-brand-ring hover:text-brand"
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="h-5 w-5" />
    </button>
  )
}
