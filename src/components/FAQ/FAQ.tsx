import  { useState } from 'react';
import './FAQ.css'
function FAQ() {
    const [open, setOpen] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [openThree, setOpenThtree] = useState(false);

  return (
    <div>
        <section className='location' >
            <div className='map' >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.6718820771976!2d31.521906075423807!3d30.586806774654907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f125ba86a5d3%3A0xb34e3748fa9ee184!2sFaculty%20of%20Computers%20and%20Informatics%2C%20Zagazig%20University!5e0!3m2!1sen!2seg!4v1781871387776!5m2!1sen!2seg" 
                width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='info-address'>
                <div className="address-title">

                <h2>Get in Touch</h2>
                <p>We're located in the heart of the medical district, easily accessible by public transport.</p>
                </div>
                <div className="address-list">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="address-content">

                    <h4>Address</h4>
                    <p>123 Wellness Way, Suite 500, New York, NY 10001</p>
                    </div>
                </div>
                <div className="address-list">
                    <i className="fa-solid fa-phone"></i>
                     <div className="address-content">
                        <h4>Phone</h4>
                        <p>+1 (212) 555-0198</p>
                     </div>
                </div>
                <div className="address-list">
                    <i className="fa-regular fa-envelope"></i>
                     <div className="address-content">
                        <h4>Email</h4>
                        <p>care@medicore.com</p>
                     </div>
                </div>
            </div>
        </section>


        <section className='Equsetion-faq' >
            <h2>Frequently Asked Questions</h2>

            <ul className='answer-equ' >

             <li className='list-equ'>
    <div className="question">
        <p>Do you accept international insurance?</p>
        <i onClick={() => setOpen(!open)} 
           className={`fa-solid ${
              open ? 'fa-angle-up' : 'fa-angle-down'

            }`}
        ></i>
    </div>

    <span  className={`answer ${!open ?'hidden': ''}`}>
        Yes, we work with most major international insurance providers.
        Please contact our billing department for a specific list of accepted plans.
    </span>
</li>
                <li className='list-equ' >
                     <div className="question">

                    <p>How quickly can I see a specialist?</p> 
                      <i onClick={() => setOpenTwo(!openTwo)} 
           className={`fa-solid ${
              openTwo ? 'fa-angle-up' : 'fa-angle-down'
            }`}
        ></i>
                     </div>
                     <span  className={`answer ${!openTwo ?'hidden': ''}`}>
                        MediCore prioritizes urgent cases. Most patients can see a specialist within 24 to 48 hours of their initial request.
                     </span>
                    </li>
                <li className='list-equ'>
               
                    <div className="question">

                    <p>Are telemedicine consultations available?</p> 
                    <i onClick={() => setOpenThtree(!openThree)} 
           className={`fa-solid ${
              openThree ? 'fa-angle-up' : 'fa-angle-down'
            }`}
        ></i>
                    </div>
                     <span className={`answer ${!openThree ?'hidden': ''}`} >
                        Absolutely. We offer secure video consultations for follow-ups, results discussion, and minor health concerns.
                     </span>
                   

                    </li>
            </ul>
        </section>
    </div>
  )
}

export default FAQ