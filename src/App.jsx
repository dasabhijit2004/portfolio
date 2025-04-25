import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Education from './components/Education'
import BackToTop from './components/BackToTop'
import CursorDot from './components/CursorDot'
// import LoadingSpinner from './components/LoadingSpinner'

function App() {

  return (
    <>
      {/* <LoadingSpinner /> */}
      <CursorDot />
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
