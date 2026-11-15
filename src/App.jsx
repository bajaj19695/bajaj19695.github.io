import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Projects from './components/Projects.jsx'
import Architecture from './components/Architecture.jsx'
import Skills from './components/Skills.jsx'
import OpenSource from './components/OpenSource.jsx'
import Leadership from './components/Leadership.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingContact from './components/FloatingContact.jsx'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-xl focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Stats />
        <Projects />
        <Architecture />
        <Skills />
        <OpenSource />
        <Leadership />
        <Contact />
      </main>

      <Footer />
      <FloatingContact />
    </>
  )
}
