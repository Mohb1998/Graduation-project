import React from "react";
import styles from '../css/landingpage.module.css'

import AnchorLink from "react-anchor-link-smooth-scroll";


function Navbar(props)
{
    return(
        <div className={styles['navbar226']}>

            <AnchorLink href='/'>
                <button className={styles['text36']}>
                    SMR
                </button>
                <img src="/images/Logo.png" style={{paddingLeft:"5px", paddingTop:"5px"}}></img> 
            </AnchorLink>

            <AnchorLink href='#Features'>
                <button className={styles['text37']}>
                    Features
                </button>
            </AnchorLink>

            <AnchorLink href='#Aboutus'>
                <button className={styles['text38']}>
                    About us
                </button>
            </AnchorLink>

            <AnchorLink href="#Contactus">
                <button className={styles['text39']}>
                    Contact us
                </button>
            </AnchorLink>
            
        </div>     
    )
}

export default Navbar;
