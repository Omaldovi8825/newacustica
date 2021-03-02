import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import './styles/Header.css'

const Header = props => {

    const total = props.cart.reduce((acum, producto) => acum + producto.qty, 0)

    return(
        <div className="header">
            <Link to="/" className="botonHome"></Link>
            <div className="menu">
                <Link to="/audio">Audio</Link>
                <Link to="/iluminacion">Iluminacion</Link>
                <Link to="/streaming">Streaming</Link>
                <Link to="/dj">Dj</Link>
                <Link to="/video">Video</Link>
            </div>
            <div className="cart">
                <Link to="/cotizacion">
                    <i className="fas fa-shopping-basket"></i>
                </Link>
                <span>{total}</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps,null)(Header)