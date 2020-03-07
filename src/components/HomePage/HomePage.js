import React from 'react';
import Introduction from './home-components/Introduction'
import AboutUs from './home-components/AboutUs'
import PhotosSlider from './home-components/PhotosSlider'
import ServicePros from './home-components/ServicePros'
import HotTour from './home-components/HotTour'
import Contact from './home-components/Contact'
import Footer from './home-components/Footer'

//import './HomePage.scss'

export default class HomePage extends React.Component {
    render(){
        return(
            <div>
                <Introduction />
                <AboutUs />
                <PhotosSlider />
                <ServicePros />
                <HotTour />
                <Contact />
                <Footer />
            </div>
        )
    }
}