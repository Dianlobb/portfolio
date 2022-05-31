import { useState } from 'react'
import React from "react";




const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/contact'));
const Navbar = React.lazy(() => import('./components/Navbar'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));


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
