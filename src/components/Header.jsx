import React from 'react'
import {Link} from 'react-router-dom'

import './styles/Header.css'

const Header = () => {
    return(
        <div className="header">
            <div className="menu">
                <Link to="/video">Video</Link>
                <Link to="/audio">Audio</Link>
                <Link to="/dj">Dj</Link>
                <Link to="/iluminacion">Iluminacion</Link>
            </div>
        </div>
    )
}

export default Header