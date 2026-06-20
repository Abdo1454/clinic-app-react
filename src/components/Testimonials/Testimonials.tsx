import React from 'react'
import "./Testimonials.css"
function Testimonials() {
  return (
    <div>
        <section className='test-content'>
          <h2>Voices of Trust</h2>
          <p>Hear from patients who have experienced the MediCore difference.</p>

          <div className="list-test">
            <div className="card-test">
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>"The level of care and attention at MediCore is unparalleled. Dr. Mitchell took the time to listen and explain everything clearly."</p>
            <div className="card-user">
              <p className='name-user'>RH</p>
              <div className="user-info">
                <h4>Robert Henderson</h4>
                <p>Patient for 2 years</p>
              </div>
            </div>
            </div>
            <div className="card-test">
               <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>"Finally found a clinic where technology meets empathy. Booking was seamless, and the follow-up care was excellent."</p>
            <div className="card-user">
              <p className='name-user'>LC</p>
            <div className="user-info">
              <h4>Linda Chen</h4>
              <p>Cardiology Patient</p>
            </div>
            </div>
            </div>
            <div className="card-test">
               <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p>"The diagnostic speed was incredible. I had my results and a treatment plan within 24 hours. Truly professional team."</p>
            <div className="card-user">
              <p className='name-user'>MW</p>
            <div className="user-info">
              <h4>Marcus Walsh</h4>
              <p>Diagnostic Patient</p>
            </div>
            </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Testimonials