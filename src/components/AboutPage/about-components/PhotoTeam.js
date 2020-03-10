import React from 'react'

import './PhotoTeam.scss'
import helenIcon from '../../../assets/aboutpage/helenIcon.png'
import hannahIcon from '../../../assets/aboutpage/hannahIcon.png'
import jackIcon from '../../../assets/aboutpage/jackIcon.png'

export default function PhotoTeam() {
    return(
        <div className="phototm-section">
            <div className="title-section">
                <h3 className="title">Photographers Team</h3>
            </div>
            <div className="row custom-row">
                <div className="col custom-col">
                    <img src={helenIcon} alt="Helen" />
                    <h2 className="ph-name"> Helen Murray </h2>
                    <p className="ph-position">Photographer</p>
                </div>
                <div className="col custom-col">
                    <img src={hannahIcon} alt="Hannah" />
                    <h2 className="ph-name"> Hannah Becker </h2>
                    <p className="ph-position">Team Lead</p>
                    <p className="ph-position">Photographer</p>
                </div>
                <div className="col custom-col">
                    <img src={jackIcon} alt="Jack" />
                    <h2 className="ph-name">Jack Cruzo</h2>
                    <p className="ph-position">Photographer</p>
                </div>
            </div>
        </div>
    )
}