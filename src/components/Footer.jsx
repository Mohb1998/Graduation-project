import React from "react";
import styles from '../css/landingpage.module.css'

function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer>
        <div className={styles['footer2735']}>

          <span className={styles['text']}>
            SMR
          </span>

          <p className={styles['text00']}>Copyright ⓒ {year} AAST Monitoring Project</p>

          <span className={styles['text01']}>Facebook</span>
          <span className={styles['text02']}>Twitter</span>
          <img
            alt="Vector314"
            src="/images/vector314-3ra7.svg"
            className={styles['svg']}
          />
          <img
            alt="Vector315"
            src="/images/vector315-1qen.svg"
            className={styles['svg01']}
          />
        </div>
    </footer>
  );
}

export default Footer;