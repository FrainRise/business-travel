import React from 'react'

import './TopsideBar.scss'
import returnArrow from '../../../assets/aboutpage/returnHome.png'
import { Link } from 'react-router-dom'

export default class TopsideBar extends React.Component {
    render(){
        const linkStyle = {
            textDecoration: 'none'
        }
        return(
            <div className="topsideBar-section d-flex">
                <Link to='/' style={linkStyle}>
                    <img src={returnArrow} alt="" />
                </Link>
                <h2 className="topside-title"> Return to Home</h2>
            </div>
        )
    }
    
}