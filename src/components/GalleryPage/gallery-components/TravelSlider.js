import React from 'react'

import './TravelSlider.scss'
import nyCity from '../../../assets/gallerypage/new-york-carousel.jpg'
import londonCity from '../../../assets/gallerypage/london-carousel.jpg'
import singaporeCity from '../../../assets/gallerypage/singapore-carousel.jpg'

export default function TravelSlider() {
    return (
        <div className="travel-section">
            <div className="title-section">
                <h2 className="title"> Check out our works</h2>
                <p className="descr">    
                    Thank you for the wonderful photos to our photographers. 
                </p>
            </div>
            <div className="slider-section">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={nyCity} alt="First slide"/>
                            <div class="carousel-caption d-none d-md-block darkened">
                                <h5 className="city-title">New York</h5>
                                <p className="city-descr">
                                    New York, the largest city in the U.S., is an architectural marvel with plenty of 
                                    toric monuments, magnificent buildings and countless dazzling skyscrapers.
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={londonCity} alt="Second slide"/>
                            <div class="carousel-caption d-none d-md-block darkened">
                                <h5 className="city-title">London</h5>
                                <p className="city-descr"> 
                                    London is the capital and largest city of England and the United Kingdom, 
                                    and is the largest urban area in Greater London. The River Thames travels through 
                                    the city. London is the biggest city in western Europe, and the world's 
                                    largest financial centre. ... For a long time, London was a small city.
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={singaporeCity} alt="Third slide"/>
                            <div class="carousel-caption d-none d-md-block darkened">
                                <h5 className="city-title">Singapore</h5>
                                <p className="city-descr">
                                    Singapore, officially the Republic of Singapore, is a sovereign city-state and island country 
                                    located in maritime Southeast Asia. Singapore lies about one degree of latitude (137 kilometres 
                                    or 85 miles) north of the equator, and is situated off the southern tip of the Malay Peninsula, 
                                    and, by extension, the southernmost extremity of continental Eurasia.
                                </p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}