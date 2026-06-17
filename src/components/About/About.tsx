import React from "react";
import "./About.css";
import Doctor from "../../assets/img/image-DR.png";
import Care1 from "../../assets/img/corridoor.png";
import Care2 from "../../assets/img/analysis.png";
function About() {
  return (
    <div>
      <section className="about">
        <div className="img-about">
          <img src={Doctor} alt="About Us" />
          <p className="experience"> 15+
          <br /> <span>Years of Experience</span></p>
        </div>
        <div className="about-content">
          <h2>Meet Dr. Sarah Mitchell</h2>
          <h5>Chief Medical Officer</h5>
          <p>
            Dr. Mitchell is a board-certified specialist with a passion for
            holistic health management. Her patient-centric approach has
            redefined the standard of care at MediCore, focusing on long-term
            wellness rather than just symptom treatment.
          </p>
          <span className="desc">
             <i className="fa-solid fa-graduation-cap"></i>   Harvard Medical School, MD
          </span>
          <span className="desc">
          <i className="bi bi-patch-check"></i>  Board Certified in Internal Medicine
          </span>
        </div>
      </section>
      <section className="info-about">
        <div className="info-our">
          <h2>Why Patients Choose MediCore</h2>
        <div className="list-info">
          <i className="fa-solid fa-clock"></i>
          <div className="info-small">

           <h4>Zero Wait Policy</h4>
           <p>We value your time as much as your health. Punctuality is our promise.</p>
          </div>
          </div>
        <div className="list-info">
          <i className="fa-solid fa-prescription-bottle-medical"></i>
            <div className="info-small">

           <h4>Zero Wait Policy</h4>
           <p>Equipped with the latest diagnostic and therapeutic technologies</p>
          </div>
          </div>
        <div className="list-info">
<i className="fa-solid fa-user-doctor"></i>
          <div className="info-small">

           <h4>Zero Wait Policy</h4>
           <p>Highly specialized medical professionals dedicated to your recovery.</p>
          </div>
          </div>
        </div>
        <div className="show-info-about">
          <div className="care-1">
            <img src={Care1} alt="Care" />
            <p> <span>98%</span> <br />
PATIENT SATISFACTION</p>
          </div>

          <div className="care-2">
            <p> <span>24/7</span> <br />
EMERGENCY CARE
</p>
            <img src={Care2} alt="Care" />
          </div>
        </div>

      </section>
    </div>
  );
}

export default About;
