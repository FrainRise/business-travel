import React from 'react';

import './Footer.scss'

export default class Footer extends React.Component {
    render(){
        return(
            <div className="footer-section">
                <ul className="footer-menu">
                    <li className="menu-link">
                        <a href="/#" className="link"> Home </a>
                    </li>
                    <li className="menu-link">
                        <a href="/#" className="link"> About </a>
                    </li>
                    <li className="menu-link">
                        <a href="/#" className="link"> Gallery </a>
                    </li>
                    <li className="menu-link">
                        <a href="/#" className="link"> Travel </a>
                    </li>
                </ul>
                <h2 className="footer-sign"> Business Travel </h2>
                <h2 className="footer-sign">Travel 2019 | All rights reserved </h2>
                <p className="copyright-maket"> Designed by J. Martins. Developed by A. Kovalenko. </p>
            </div>
        )
    }
}