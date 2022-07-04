import React from "react";
import {Link} from "react-router-dom"
import styles from '../css/landingpage.module.css'


function Navbar2(props)
{
    return(
        <div className={styles['navbar226']}>

            <Link to ='/'>
            <img src="/images/Logo.png" style={{paddingLeft:"5px", paddingTop:"5px"}}></img>
                <button className={styles['text36']}>
                    SMR
                </button>
            </Link>

            <Link to ="/">
                <button className={styles['text39']}>
                    Home page
                </button>
            </Link>
            
        </div>     
    )
}

export default Navbar2;
