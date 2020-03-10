import React from 'react'

import './ContactUs.scss'

export default function ContactUs() {
    return(
        <div className="contactUs-section">
            <div className="title-section">
                <h2 className="title">You can contact us</h2>
            </div>
            <div className="inputs-section">
                <div className="row">
                    <input type="text"  placeholder="Enter your full name"/>
                </div>
                <div className="row">
                    <input type="text"  placeholder="Enter enter your email address"/>
                </div>
                <div className="row">
                    <input type="text"  placeholder="Enter your question's subject "/>
                </div>
                <div className="row">
                    <textarea name="" id="" cols="30" rows="5" placeholder="Enter wide description of subject"></textarea>
                </div>
            </div>
        </div>
    )
}