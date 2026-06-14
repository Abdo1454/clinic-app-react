import React from 'react'
import "./Hero.css"
import heroImage from "../../assets/img/hero-section.png";
function Hero() {
  return (
    <div>
        <section className="hero">
         <div className="hero-content">
            <span className="hero-subtitle">EXCELLENCE IN CARE</span>
            <h1 className="hero-title">
                Your Health,
                <br></br>
                <span className="highlight">Our Priority
                </span>
            </h1>
            <p className="hero-description">Experience world-class healthcare tailored to your needs. At MediCore,
                 we combine advanced technology with compassionate care to ensure you live your healthiest life.</p>
            <div className="content-buttons">
                <a href="#" className="btn-book-appointment">Book Appointment</a>
                <a href="#" className="btn-learn">Explore Services</a>
            </div>
         </div>

        <div id="spacer">
            <img src={heroImage} alt="Hero Image" className="hero-image" />
        </div>
        </section>
        
    </div>
  )
}

export default Hero