import React from 'react';
import Introduction from './home-components/Introduction'
import AboutUs from './home-components/AboutUs'
import Photos from './home-components/Photos'
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
                <Photos />
                <ServicePros />
                <HotTour />
                <Contact />
                <Footer />
            </div>
        )
    }
}