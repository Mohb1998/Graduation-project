import React from "react";
import styles from '../css/landingpage.module.css'


function AboutUs(props) {
  return (

    <div>

        <div id="Aboutus" className={styles['aboutus62714']}>
          <img
            alt="Ellipse42715"
            src="/images/ellipse42715-5ojk.svg"
            className={styles['svg02']}
          />
          <span className={styles['text07']}>
            <span>Mohb Khaled</span>
            <br></br>
            <span>Full-stack developer</span>
          </span>
          <img
            alt="Mohb12717"
            src="/images/mohb12717-xvkr-300h.png"
            className={styles['image03']}
          />
        </div>

        <div className={styles['aboutus72718']}>
          <img
            alt="Ellipse42719"
            src="/images/ellipse42719-22ts.svg"
            className={styles['svg03']}
          />
          <span className={styles['text11']}>
            <span>
              Rowan
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Machine learning</span>
          </span>
          <img
            alt="Rowan"
            src="/images/rowan12721-0f25-300h.png"
            className={styles['image04']}
          />
        </div>

        <div className={styles['aboutus82722']}>
          <img
            alt="Ellipse42723"
            src="/images/ellipse42723-jubb.svg"
            className={styles['svg04']}
          />
          <span className={styles['text15']}>
            <span>Seif Koreitam</span>
            <br></br>
            <span>Network developer</span>
          </span>
          <img
            alt="Seif2725"
            src="/images/seif2725-5wu1-300h.png"
            className={styles['image05']}
          />
        </div>

        <div className={styles['aboutus92726']}>
          <img
            alt="Ellipse42727"
            src="/images/ellipse42727-pudm.svg"
            className={styles['svg05']}
          />
          <span className={styles['text19']}>
            <span>Mira Emad</span>
            <br></br>
            <span>Front-end developer</span>
          </span>
          <img
            alt="Mira2729"
            src="/images/mira2729-0k8i-300w.png"
            className={styles['image06']}
          />
        </div>

        <div className={styles['aboutus102730']}>
          <img
            alt="Ellipse42731"
            src="/images/ellipse42731-c6b8.svg"
            className={styles['svg06']}
          />
          <span className={styles['text23']}>
            <span>Sherif Tarek</span>
            <br></br>
            <span>Machine learning</span>
          </span>
          <img
            alt="Sherif2733"
            src="/images/sherif2733-px8-300h.png"
            className={styles['image07']}
          />
        </div>

        <span className={styles['text27']}>
          AAST very best working towards a better learning experience
        </span>

    </div>
          
  )
}

export default AboutUs;