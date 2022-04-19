import React from 'react'

import {Link} from "react-router-dom"
import styles from '../css/landingpage.module.css'

const Landingpage = (props) => {
  return (
    <div>
      <div className={styles['landingpage12']}>
        <div className={styles['footer2735']}>
          <span className={styles['text']}>
            SMR
          </span>
          <span className={styles['text01']}>Facebook</span>
          <span className={styles['text02']}>Twitter</span>
          <img
            alt="Vector314"
            src="/Images/vector314-3ra7.svg"
            className={styles['svg']}
          />
          <img
            alt="Vector315"
            src="/images/vector315-1qen.svg"
            className={styles['svg01']}
          />
        </div>
        <div className={styles['contactform2738']}>
          <span className={styles['text03']}>Contact us</span>
          <span className={styles['text04']}>Email :</span>
          <span className={styles['text05']}>Name :</span>
          <span className={styles['text06']}>Comment :</span>
          <img
            alt="Rectangle52744"
            src="/images/rectangle52744-ehzj.svg"
            className={styles['image']}
          />
          <img
            alt="Rectangle72745"
            src="/images/rectangle72745-t4.svg"
            className={styles['image01']}
          />
          <img
            alt="Rectangle62746"
            src="/images/rectangle62746-5ud7.svg"
            className={styles['image02']}
          />
        </div>
        <div className={styles['aboutus62714']}>
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
        <span className={styles['text31']}>
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
        
        <Link to ="/Signup">
          <button className={styles['button120']}>
            <span className={styles['text34']}>Sign up</span>
          </button>
        </Link>
        
        <Link to="/Signin">
          <button className={styles['button121']}>
            <span className={styles['text35']}>Sign in</span>
          </button>
        </Link>

        <div className={styles['navbar226']}>
          <span className={styles['text36']}>SMR</span>
          <span className={styles['text37']}>Features</span>
          <span className={styles['text38']}>About us</span>
          <span className={styles['text39']}>Contact us</span>
        </div>
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
