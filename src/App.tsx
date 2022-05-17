import { useState } from 'react'
import About from './components/About'
import Contact from './components/contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'


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
