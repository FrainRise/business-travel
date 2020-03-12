import React from 'react'

import './Introduction.scss'
import Navbar from '../../HomePage/home-components/Navbar'

export default function Introduction() {
    return (
        <div className="wrap">
            <Navbar />
            <div className="introduction-section">
                <h2 className="intro-title">Gallery is like shrine. Must spiritually fill people</h2>
            </div>
        </div> 
    )
}