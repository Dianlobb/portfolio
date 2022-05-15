import { useState } from 'react'
import About from './components/About/About'
import Contact from './components/Contact/contact'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="text-gray-400 bg-indigo-700 body-font">
    <Navbar />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </main>
  )
}

export default App
