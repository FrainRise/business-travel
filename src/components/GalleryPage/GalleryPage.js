import React from 'react'

import './GalleryPage.scss'

import Introduction from './gallery-components/Introduction'
import Footer from '../HomePage/home-components/Footer'

export default function GalleryPage() {
    return (
        <div className="gallery-page">
            <Introduction />
            <Footer />
        </div>
    )
}