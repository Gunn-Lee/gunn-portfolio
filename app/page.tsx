import { Hero } from './components/portfolio/hero'
import { About } from './components/portfolio/about'
import { Skills } from './components/portfolio/skills'
import { Experience } from './components/portfolio/experience'
import { Projects } from './components/portfolio/projects'
import { Contact } from './components/portfolio/contact'

export default function Page() {
  return (
    <div className='space-y-24 pb-24'>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
