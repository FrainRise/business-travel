import React from 'react';

import Navbar from './Navbar'
import './Introduction.scss'

export default class Introduction extends React.Component {
    render(){
        return(
            <div className="wrapper">
                <Navbar />
                <div className='introduction-section container'>
                    <h2 className="intro-greet">Business Travel</h2>
                    <p className="intro-desc">For entrepreneurs and freelancers</p>
                    <button type="submit" className="intro-btn">
                        More info
                    </button>
                </div>
            </div>
        )
    }
}