import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Clients from './components/Clients'
import News from './components/News'
import Awards from './components/Awards'
import Contact from './components/Contact'
import WhatsAppIcon from './components/WhatsAppIcon'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Clients />
      <News />
      <Awards />
      <Contact />
      <WhatsAppIcon />
    </div>
  )
}

export default App
