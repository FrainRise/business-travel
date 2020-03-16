import React from 'react'

import './GalleryPage.scss'

import Introduction from './gallery-components/Introduction'
import TravelSlider from './gallery-components/TravelSlider'
import Footer from '../HomePage/home-components/Footer'

export default function GalleryPage() {
    return (
        <div className="gallery-page">
            <Introduction />
            <TravelSlider />
            <Footer />
        </div>
    )
}