import React from 'react'

import './Introduction.scss'
import { Link } from 'react-router-dom';

export default function Navbar(){
    const linkStyle = {
        textDecoration: 'none'
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link" style={linkStyle}> Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to='/about-us' className="nav-link" style={linkStyle}>About</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to='/travels'  className="nav-link" style={linkStyle}>Travel</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to='/gallery'  className="nav-link" style={linkStyle}>Gallery</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}