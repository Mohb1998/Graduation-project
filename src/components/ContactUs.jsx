import React from "react";
import Form from 'react-bootstrap/Form'

import styles from '../css/landingpage.module.css'


function ContactUs(props) {
  return (
      <div id="Contactus" className={styles['contactform2738']}>
        <span className={styles['text03']}>Contact us</span>
        <span className={styles['text04']}>Email :</span>
        <span className={styles['text05']}>Name :</span>
        <span className={styles['text06']}>Comment :</span>

          <Form.Control style={{width:"260px"}} className={styles['image']} type="text" placeholder="Enter your first name"/>

          <Form.Control style={{width:"260px"}} className={styles['image01']} type="email" placeholder="Enter email"/>

          <Form.Control style={{width:"526px"}} className={styles['image02']} type="text" placeholder="How can we improve ?"/>

      </div>
  )
}

export default ContactUs;