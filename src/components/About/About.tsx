import React from "react";
import "./About.css";
import Doctor from "../../assets/img/image-DR.png";
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
    </div>
  );
}

export default About;
