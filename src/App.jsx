import React from 'react'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import Technologies from './Components/Technologies'
import Projects from './Components/Projects'
import Experiences from './Components/Experiences'
import Contact from './Components/Contact'

function App() {
  return (
    <div className='overflow-x-hidden antialiased'>
      <div className="fixed inset-0 -z-10">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Intro />
        <Technologies />
        <Projects />
        <Experiences />
        <Contact />
      </div>
    </div>
  )
}

export default App