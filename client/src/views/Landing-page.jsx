import React from 'react'

import {Link} from "react-router-dom"
import styles from '../css/landingpage.module.css'


import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import AboutUs from '../components/AboutUs'
import Features from '../components/Features'

const Landingpage = (props) => {
  return (

    <div>
      <div className={styles['landingpage12']}>

        <Navbar />
        <Footer />
        <ContactUs />
        <AboutUs />
        <Features />

        <span id="Features" className={styles['text31']}>
          Why Choose SMR for your next learning experience ?
        </span>
        <img
          alt="image11113"
          src="/images/image11113-4cxt-1300w.png"
          className={styles['image11']}
        />
        <span className={styles['text32']}>
          The next step in online learning
        </span>
        <span className={styles['text33']}>Smart monitoring redesigned</span>
        
        <Link to ="/SignupStudent">
          <button className={styles['button120']}>
            <span className={styles['text34']}>Sign up</span>
          </button>
        </Link>
        
        <Link to="/PreSignin">
          <button className={styles['button121']}>
            <span className={styles['text35']}>Sign in</span>
          </button>
        </Link>
        
        <div className={styles['decorations316']}>
          <img
            alt="Ellipse2225"
            src="/images/ellipse2225-dzt.svg"
            className={styles['svg07']}
          />
          <img
            alt="Ellipse1224"
            src="/images/ellipse1224-d1m.svg"
            className={styles['svg08']}
          />
          <img
            alt="Ellipse4272"
            src="/images/ellipse4272-hyi.svg"
            className={styles['svg09']}
          />
          <img
            alt="Ellipse5273"
            src="/images/ellipse5273-4x4e.svg"
            className={styles['svg10']}
          />
          <img
            alt="Ellipse42747"
            src="/images/ellipse42747-uods.svg"
            className={styles['svg11']}
          />
          <img
            alt="Ellipse52748"
            src="/images/ellipse52748-q4ch.svg"
            className={styles['svg12']}
          />
        </div>
      </div>
    </div>
  )
}

export default Landingpage
