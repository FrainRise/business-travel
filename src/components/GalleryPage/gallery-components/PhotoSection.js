import React from 'react'

import tokioCity from '../../../assets/gallerypage/tokio-city-land.jpg'
import miamiCity from '../../../assets/gallerypage/miami-city-land.jpg'
import frankfurtCity from '../../../assets/gallerypage/frankfurt-city-land.jpg'
import parisCity from '../../../assets/gallerypage/paris-city-land.jpg'
import madridCity from '../../../assets/gallerypage/madrid-city-land.jpg'
import kievCity from '../../../assets/gallerypage/kiev-city-land.jpg'
import moscowCity from '../../../assets/gallerypage/moscow-city-land.jpg'
import lissabonCity from '../../../assets/gallerypage/lissabon-city.jpg'
import minskCity from '../../../assets/gallerypage/minsk-city-land.jpg'
import './PhotoSection.scss'

export default function PhotoSection(){
    return (
        <div className="photos-section">
            <h4 className="photos-title">Additional masterpiece</h4>
            <div className="row custom-row">
                <div className="col-4">
                    <img src={tokioCity} alt="tokio" className="col-img"/>
                </div>
                <div className="col-4">
                    <img src={miamiCity} alt="miami" className="col-img"/>
                </div>
                <div className="col-4">
                    <img src={frankfurtCity} alt="frankfurt" className="col-img"/>
                </div>
            </div>
            <div className="row custom-row">
                <div className="col-4">
                    <img src={parisCity} alt="paris" className="col-img"/>
                </div>
                <div className="col-4">
                    <img src={kievCity} alt="kiev" className="col-img"/>
                </div>
                <div className="col-4">
                    <img src={madridCity} alt="madrid" className="col-img"/>
                </div>
            </div>
            <div className="row custom-row">
                <div className="col-4">
                    <img src={moscowCity} alt="moscow" className="col-img"/>
                </div>
                <div className="col-4">
                    <img src={lissabonCity} alt="lissabon" className="col-img"/>
                </div>
                <div className="col-4">
                    <img src={minskCity} alt="minsk" className="col-img"/>
                </div>
            </div>
        </div>
    )
} 