import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Carosel from "../components/Carosel";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs"

function Homepage()
{
    return(
        <div>
            <Navbar/>
            <Header/>
            <Carosel/>

            <Features
                classname="featuresContainer1"
                title="Privacy built in from the start"
                source="/images/feature1.jpg"
                content="We have built this app with the highest level of security to keep all your information safe all the time."
            />
            <Features
                classname="featuresContainer2"
                title="Smart face detection"
                source="/images/feature2.jpg"
                content="We have built one of the best face detection programs to help you and the instructor have the best possible experience 
                while learniing."
            />
            <Features
                classname="featuresContainer3"
                title="Keeping you engaed throughout the lecture"
                source="/images/feature3.jpg"
                content="With our random student picker we make sure you are always focused and taking advantage of every second."
            />
            <AboutUs/>

            <Footer/>
        </div>
        
    )
}

export default Homepage;