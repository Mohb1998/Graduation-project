import React from "react";
import {Link} from "react-router-dom"
import styles from '../css/landingpage.module.css'


function Navbar(props)
{
    return(
        <div className={styles['navbar226']}>
            <a className={styles['text36']}>SMR</a>
            <a className={styles['text37']}><Link to="" style={{ textDecoration: 'none', color: 'black' }}>Features</Link></a>
            <a className={styles['text38']}><Link to="" style={{ textDecoration: 'none', color: 'black' }}>About us</Link></a>
            <a className={styles['text39']}><Link to="" style={{ textDecoration: 'none', color: 'black' }}>Contact us</Link></a>
        </div>     
    )
}

export default Navbar;
