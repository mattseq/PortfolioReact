import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import BackgroundEffects from './components/BackgroundEffects'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const aboutY = useTransform(scrollYProgress, [0, 0.5], ["0%", "25%"])
  const skillsY = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "30%"])
  const projectsY = useTransform(scrollYProgress, [0.4, 1], ["0%", "40%"])

  return (
    <div ref={containerRef} className="App">
      {/* Background Effects */}
      <BackgroundEffects />

      {/* Hero Section */}
      <Hero heroY={heroY} />

      {/* About Section */}
      <About aboutY={aboutY} />

      {/* Skills Section */}
      <Skills skillsY={skillsY} />

      {/* Projects Section */}
      <Projects projectsY={projectsY} />

      {/* Contact Section */}
      <Contact />
    </div>
  )
}

export default App
