import React from "react";
import styles from '../css/landingpage.module.css'


function Features(props) {
  return (
      <div>

        <div className={styles['features274']}>
          <img
            alt="feature2275"
            src="/images/feature2275-45m-600w.png"
            className={styles['image08']}
          />
          <span className={styles['text28']}>
            Thanks to the use of advanced machine learning features our smart
            monitoring system is capable of keeping track of attendance through
            face recognition and track of the concentration of each student as
            well as the class average
          </span>
        </div>

        <div className={styles['feature277']}>
          <img
            alt="feature1278"
            src="/images/feature1278-owz-600w.png"
            className={styles['image09']}
          />
          <span className={styles['text29']}>
            We use state of the art security to keep all of your data secure
            from any attack and always keep a backup of all the data in case of
            any system failure
          </span>
        </div>

        <div className={styles['feature2710']}>
          <img
            alt="feature32711"
            src="/images/feature32711-39tp-600w.png"
            className={styles['image10']}
          />
          <span className={styles['text30']}>
            By making it easier for the instructor to deliver knowledge we are
            able to achieve a classroom feeling
          </span>
        </div>
        
    </div>
  )
}

export default Features;