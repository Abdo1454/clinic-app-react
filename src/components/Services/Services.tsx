import React from 'react';
import './Services.css';
import generalIcon from "../../assets/img/health-home.png";
import Cardiology from "../../assets/img/cardiology_icon.png";
import Diagnostics from "../../assets/img/diagnostics_icon.png";
function Services() {
  return (
    <div>
        <section className="services" id="services">
            <div className="container">
                <h2 className="section-title">Premium Services</h2>
                <p className="section-description">Specialized healthcare solutions for every stage of your journey.</p>
                <div className="services-grid">
                    <div className="service-item">
                        <img src={generalIcon} alt="General Practice" />
                        <h3>General Practice</h3>
                        <p>Comprehensive primary care including wellness exams, preventative medicine, and acute illness management.</p>
                        <a href="#" className="learn-more">Learn More</a>
                    </div>
                    <div className="service-item">
                        <img src={Cardiology} alt="Cardiology" />
                        <h3>Cardiology</h3>
                        <p>Expert heart care utilizing advanced diagnostic tools to manage hypertension, heart disease, and vascular health.</p>
                        <a href="#" className="learn-more">Learn More</a>
                    </div>
                    <div className="service-item">
                        <img src={Diagnostics} alt="Diagnostics" />
                        <h3>Diagnostics</h3>
                        <p>Rapid, accurate laboratory testing and medical imaging services provided with professional precision.</p>
                        <a href="#" className="learn-more">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services