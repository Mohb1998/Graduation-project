import React from "react";
import emailjs from "emailjs-com"

import '../css/contactus.css'

function ContactUs(props) {

  function handleEmail(e){
    e.preventDefault()

    emailjs.sendForm(
      "service_8cs65wq", 
      "template_gx6adqq", 
      e.target,
      "8kApYBlWYSnO0dVIH",
      ).then(res => {
        console.log(res)
        alert('Your email has been sent we will get back to you soon 😊')
      }).catch(err => {
        console.log(err)
        alert("We couldn't send the email")
      }
        )
  }

  return (
    <div className="contactus-container">
      <div className="contactus-contactus">
        <span className="contactus-text">Contact us</span>
          <span className="contactus-text1">Email :</span>
          <span className="contactus-text2">Name :</span>
          <span className="contactus-text3">Category :</span>
          <span className="contactus-text4">Comment :</span>

          <form onSubmit={handleEmail}>

            <input className="contactus-rectangle5" name="name" type="text" placeholder=" Enter your first name"/>

            <input className="contactus-rectangle7" name="email" type="email" placeholder=" Enter your email"/>

            <input list="category" className="contactus-rectangle8" placeholder="Choose category" name="category"/>
            <datalist id="category" className="contactus-rectangle8" name="category" type="text" placeholder=" Enter category">
              <option value="Complain"></option>
              <option value="Suggestion"></option>
              <option value="Enquirers"></option>
            </datalist>

            <textarea className="contactus-rectangle6" name="message" placeholder=" Write your feedback"/>

            <button type="submit" className="contactus-button">
              <span className="contactus-text5">Send</span>
            </button>
            
          </form>  
        </div>
      </div>
  )
}

export default ContactUs;