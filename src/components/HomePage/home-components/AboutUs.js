import React from 'react'

import './AboutUs.scss'
import articleImage from '../../../assets/homepage/sebastien.jpeg'

export default class AboutUs extends React.Component {
    render(){
        return(
            <div className="aboutus-section">
                <div className="row custom-row">
                    <div className="col text-col">
                        <p className="about-title">
                            About us
                        </p>
                        <h3 className="article-title">
                            We will turn your work into an exciting journey.
                        </h3>
                        <p className="article-descr">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                        <p className="article-descr">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        <button className="article-btn">
                            More info
                        </button>
                    </div>
                    <div className="col img-col">
                        <img src={articleImage} alt="article" />
                    </div>
                </div>
            </div>
        )
    }
}