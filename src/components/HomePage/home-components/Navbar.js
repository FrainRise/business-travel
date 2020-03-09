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
                        <Link to='/' style={linkStyle}><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to='/about-us' style={linkStyle}><a className="nav-link" href="#">About</a></Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to='/travels' style={linkStyle}><a className="nav-link" href="#">Travel</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}