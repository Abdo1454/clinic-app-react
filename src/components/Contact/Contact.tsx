import { useState } from 'react';
import './Contact.css'
function Contact() {
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [date, setDate] = useState("");
   const [service, setService] = useState("");
const [notes, setNotes] = useState("");
  function handleForm(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
      const formData = {
    name,
    phone,
    date,
    service,
    notes
  };
  if(formData.name.length<3){
    alert("name is not valid");
  }else if(formData.phone.length<11){
    alert("number is not valid");
  }else if(formData.service==""){
        alert("enter service");
  }else if(formData.date==""){
        alert("enter date");
  }else{
    alert("Accepted")
    // console.log("very good");
      const message = `
Name: ${name}
Phone: ${phone}
Date: ${date}
Service: ${service}
Notes: ${notes}
`;

  const encodedMessage = encodeURIComponent(message);

  const phoneNumber = "201066250647"; // رقم واتساب بدون +

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    "_blank"
  );
  }

  // console.log("Form Data:", formData);
  }

  return (
    <div>
        <section className="contact">
            <div className="card-form">
                <h2>Schedule Your Visit</h2>
                <p>Fill out the form below and our coordinator will reach out within 15 minutes.</p>
            <form className="contact-form" onSubmit={handleForm}>
               <div className="desc-input">
                <label>Full Name</label>
                <br />
                <input type="text" placeholder="John Doe" 
                 value={name}
        onChange={(e) => setName(e.target.value)}
                />
                </div>
                     <div className="desc-input">
                        <label>Phone Number</label>
                        <br></br>
                <input type="phone" placeholder="+1 (123) 456-7890" 
                value={phone}
                onChange={(e) => {setPhone(e.target.value)}}
                />
                     </div>
                      <div className="desc-input">
                        <label>Preferred Date</label>
                        <br></br>
                <input type="date" placeholder="Select Date"  
                value={date}
                onChange={(e) =>{setDate(e.target.value)}}
                />
                      </div>
                      <div className="desc-input">
                        <label>Service Needed</label>
                        <br></br>
                <select id='service'
                value={service}
                onChange={(e)=>{setService(e.target.value)}}
                >
                    <option value="General Practice">General Practice</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Diagnostics">Diagnostics</option>
                    <option value="Other">Other</option>
                </select>
                      </div>
                      <div className="desc-input">
                        <label>Additional Notes</label>
                        <br />
                <textarea id='notes'
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                placeholder="How can we help you today?"></textarea>
                      </div>
                <button className="send" type="submit">Confirm Appointment Request</button>
            </form>
            </div>
        </section>
    </div>
  )
}

export default Contact