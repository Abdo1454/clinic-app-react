import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Contact />
    </div>
  )
}

export default Home