import React from "react";
import emailjs from "emailjs-com"

import styles from '../css/landingpage.module.css'


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
      }).catch(err => 
        console.log(err))
  }

  return (
      <div id="Contactus" className={styles['contactform2738']}>
        <span className={styles['text03']}>Contact us</span>
        <span className={styles['text04']}>Email :</span>
        <span className={styles['text05']}>Name :</span>
        <span className={styles['text06']}>Comment :</span>

        <form onSubmit={handleEmail}>
          <input style={{width:"260px"}} className={styles['image']} name="name" type="text" placeholder="Enter your first name"/>

          <input style={{width:"260px"}} className={styles['image01']} name="email" type="email" placeholder="Enter email"/>

          <input style={{width:"526px"}} className={styles['image02']} name="message" type="text"/>

          <button type="submit" className={styles["contactus1366-button16317"]}>
            <span className={styles["contactus1366-text4"]}>Send</span>
          </button>
        </form>
          
      </div>
  )
}

export default ContactUs;