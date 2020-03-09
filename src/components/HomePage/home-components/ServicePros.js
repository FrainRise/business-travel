import React from 'react'

import './ServicePros.scss'
import sunsetBeach from '../../../assets/homepage/sunset-beach.png'
import sweetHome from '../../../assets/homepage/sweet-home.png'


export default class ServicePros extends React.Component {
    render(){
        let pros = [
            {id: 1, image: sunsetBeach, alt: 'sunset beach', title: 'COMFORTABLE PREMIUM CLASS ACCOMMODATIONS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
            {id: 2, image: sweetHome, alt: 'sweet home', title: 'WEEKLY GROUP ENTERTAINMENT AND EXCURSIONS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}
        ]
        return(
            <div className="pros-section">
                <div className="pros-title">
                    <h2 className="title">Travel with our company</h2>
                    <p className="title-descr">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore   
                    </p>
                </div>
                <div className="pros-info">
                    <div className="row">
                        {
                            pros.map(item => {
                                return (
                                    <div className="col" key={item.id}>
                                        <img src={item.image} alt={item.alt} />
                                        <h3 className="item-title">
                                            {item.title}
                                        </h3>
                                        <p className="item-descr">
                                            {item.description}
                                        </p>
                                        <button className="item-btn">
                                            View photos
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}