import React from 'react'

import './AboutPage.scss'
import TopsideBar from './about-components/TopsideBar'
import AboutIntro from './about-components/AboutIntro'
import CeoTeam from './about-components/CeoTeam'
import PhotoTeam from './about-components/PhotoTeam'
import ContactUs from './about-components/ContactUs'
import Footer from '../HomePage/home-components/Footer'

export default function AboutPage(){
    return (
        <div className="main-container">
            <TopsideBar />
            <AboutIntro />
            <CeoTeam />
            <PhotoTeam />
            <ContactUs />
            <div className="wrap">
                <Footer />
            </div>
        </div>
    )
}