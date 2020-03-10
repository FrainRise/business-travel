import React from 'react';
// import Slider from "react-slick";

import './PhotosSlider.scss'
import islandsImage from '../../../assets/homepage/islands.png'
import roadImage from '../../../assets/homepage/road.png'
import sunsetImage from '../../../assets/homepage/sunset.png'
// import italiaImage from '../../../assets/italia.jpeg'
// import italiaSecImage from '../../../assets/italia_2.jpeg'
// import mountainsImage from '../../../assets/mountains.jpeg'

export default class Photos extends React.Component {

    
    render(){

        return(
            <div className="portfolio-section">
                <div className="photos-title">
                    <h2 className="main-title"> Photos of our travels </h2>
                    <p className="title-descr">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore   
                    </p>
                </div>
                <div className="photos">
                    <div className="row slider-section align-content-center justify-content-center">
                        <div className="col-xl-4">
                            <img src={islandsImage} alt="" />
                        </div>
                        <div className="col-xl-4">
                            <img src={roadImage} alt="" />
                        </div>
                        <div className="col-xl-4">
                            <img src={sunsetImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


/*
 let settings = {
            autoplay: true,
            autplaySpeed: 2000,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 3,
            className: "center",
            centerMode: true,
            centerPadding: "600px",
            fade: true,
        }


<div className="slider-section">

                    <Slider {...settings}>
                        <div>
                            <img src={sunsetImage} alt="sunset-img" />
                        </div>
                        <div>
                            <img src={roadImage} alt="road-img" />
                        </div>
                        <div>
                            <img src={islandsImage} alt="island-img" />
                        </div>
                        <div>
                            <img src={italiaImage} alt="italia-img" />
                        </div>
                        <div>
                            <img src={italiaSecImage} alt="italia-2-img" />
                        </div>
                        <div>
                            <img src={mountainsImage} alt="mountain-img" />
                        </div>
                    </Slider>
                </div>
*/