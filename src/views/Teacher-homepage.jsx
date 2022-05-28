import React from "react";

import styles from '../css/landingpage.module.css'
import {Link} from "react-router-dom"

function Teacherpage() {
  return (
        <Link to ="/MeetingRoom/?publish=true">
          <button className={styles['button120']}>
            <span className={styles['text34']}>Create a room</span>
          </button>
        </Link>
  );

}
export default Teacherpage;