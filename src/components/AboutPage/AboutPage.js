import React from 'react'

import './AboutPage.scss'
import TopsideBar from './about-components/TopsideBar'
import AboutIntro from './about-components/AboutIntro'
import CeoTeam from './about-components/CeoTeam'
import PhotoTeam from './about-components/PhotoTeam'
import ContactUs from './about-components/ContactUs'

export default function AboutPage(){
    return (
        <div>
            <h2>This is about page</h2>
            <TopsideBar />
            <AboutIntro />
            <CeoTeam />
            <PhotoTeam />
            <ContactUs />
        </div>
    )
}