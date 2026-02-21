import { Navbar } from '@/layouts/Navbar'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Skill } from '@/sections/Skill'
import { Projects } from '@/sections/Projects'
import { Experience } from '@/sections/Experience'
import { Contact } from '@/sections/Contact'
import { Footer } from '@/layouts/Footer'


function App() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero/>
        <About/>
        <Skill/>
        <Projects/>
        <Experience/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
