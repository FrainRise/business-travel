import React from 'react'

import './Contact.scss'

export default class Contact extends React.Component {
    render(){
        return(
            <div className="contact-section">
                <div className="contact-info">
                    <div className="row">
                        <div className="col-4">
                            <h2 className="contact-title"> Book a discounter tour</h2>
                            <p className="descr">
                                Mauris ultrices eros in cursus turpis 
                            </p>
                        </div>
                        <div className="col-3">
                            <input type="text" className="contact-input" placeholder="Name" />
                        </div>
                        <div className="col-3">
                            <input type="text" className="contact-input" placeholder="Email" />
                        </div>
                        <div className="col-2">
                            <button className="contact-btn">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}