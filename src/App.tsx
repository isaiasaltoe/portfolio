import { DevFlowDoodle, GutterDoodle, MiniErDoodle } from './components/Doodles'
import { Navbar } from './components/Navbar'
import { PencilFilter } from './components/PencilFilter'
import { Scribble } from './components/Scribble'
import { useLanguage } from './i18n/useLanguage'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experiences } from './sections/Experiences'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'

const year = new Date().getFullYear()

function App() {
  const { t } = useLanguage()

  return (
    <>
      <PencilFilter />
      <Navbar />
      <main>
        <Hero />
        <GutterDoodle side="right" offset={-40}>
          <MiniErDoodle />
        </GutterDoodle>
        <Projects />
        <Experiences />
        <GutterDoodle side="left" offset={60}>
          <DevFlowDoodle />
        </GutterDoodle>
        <About />
        <Contact />
      </main>
      <footer className="mx-auto max-w-5xl px-6 pb-12 text-center text-pencil-light">
        <Scribble className="mx-auto mb-6 w-48 text-smudge" />
        © {year} Isaías Altoé. {t.footer}
      </footer>
    </>
  )
}

export default App
