import React from 'react';
import Slider from "react-slick";

import './PhotosSlider.scss'
import islandsImage from '../../../assets/islands.png'
import roadImage from '../../../assets/road.png'
import sunsetImage from '../../../assets/sunset.png'

export default class Photos extends React.Component {

    
    render(){
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        return(
            <div className="slider-section">
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                </Slider>
            </div>
        )
    }
}