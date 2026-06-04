import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import GitHub from './components/GitHub'
import Experience from './components/Experience'
import { Education, Achievements, Certifications } from './components/Extras'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="bg-bg-0 text-t1 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHub />
      <Experience />
      <Education />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}
