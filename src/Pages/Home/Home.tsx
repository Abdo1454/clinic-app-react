import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import FAQ from '../../components/FAQ/FAQ'
import Testimonials from '../../components/Testimonials/Testimonials'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <FAQ />
    </div>
  )
}

export default Home