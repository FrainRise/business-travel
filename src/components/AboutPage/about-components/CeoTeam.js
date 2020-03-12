import React from 'react'

import './CeoTeam.scss'
import andrewIcon from '../../../assets/aboutpage/andrewIcon.png'
import clayIcon from '../../../assets/aboutpage/clayIcon.png'

export default function CeoTeam() {
    return(
        <div className="ceo-section">
            <div className="title-section">
                <h2 className="title">Meet our Team</h2>
                <p className="description">1 frontend developer, 1 backend developer, 3 photographers and infinity of friendship and kindness</p>
            </div>
            <div className="row custom-row">
                <div className="col col-lg-12">
                    <img src={andrewIcon} alt=""/>
                </div>
                <div className="col-10 col-lg-9 text-col">
                    <h2 className="ceo-name">Andrew Kovalenko</h2>
                    <h6 className="ceo-position">Frontend developer</h6>
                    <p className="ceo-descr">
                        CEO and creator of the business travel project. 
                        In combination, front-end developer. 
                        Sports and tasty food lover :D
                    </p>
                </div>
            </div>
            <div className="row custom-row">
                <div className="col col-lg-12">
                    <img src={clayIcon} alt="" />
                </div>
                <div className="col-10 col-lg-9 text-col">
                    <h2 className="ceo-name">Clay Jenkins (a.k.a CJ)</h2>
                    <h6 className="ceo-position">Backend developer </h6>
                    <p className="ceo-descr">
                        One of the initiators of the idea of ​​business travel. 
                        He does not like sports, but likes food.  :c
                    </p>
                </div>
            </div>
        </div>
    )
}