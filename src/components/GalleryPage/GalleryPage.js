import React from 'react'

import './GalleryPage.scss'

import Introduction from './gallery-components/Introduction'
import TravelSlider from './gallery-components/TravelSlider'
import PhotoSection from './gallery-components/PhotoSection'
import Footer from '../HomePage/home-components/Footer'

export default function GalleryPage() {
    return (
        <div className="gallery-page">
            <Introduction />
            <TravelSlider />
            <PhotoSection />
            <Footer />
        </div>
    )
}