import React from "react";
import {
    Carousel
} from 'react-bootstrap';

function Carosels() {
    return (
        <div>
            <div class="caroselContainer">
                <Carousel fade>
                    <Carousel.Item>
                        <img className="d-block w-100 carosel-image" src="/images/image1.jpg" alt="First slide" />
                        <Carousel.Caption>
                            <h3>Upgrade your online learning experience</h3>
                            <p>Let our AI take over and enjoy a real classroom learning experience</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 carosel-image" src="/images/image2.jpg" alt="Second slide" />

                        <Carousel.Caption>
                            <h3>No more loosing time</h3>
                            <p>Our new AI aided software will help you gain more knowledge tha ever.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 carosel-image" src="/images/image3.jpg" alt="Third slide" />

                        <Carousel.Caption>
                            <h3>Stay Focused</h3>
                            <p>Let us help you achieve more from your online classes.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Carosels;