import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import './styles/Header.css'

const Header = props => {

    const total = props.cart.reduce((acum, producto) => acum + producto.qty, 0)

    return(
        <div className="header">
            <Link to="/">Home</Link>
            <div className="menu">
                <Link to="/audio" className="haudio">Audio</Link>
                <Link to="/iluminacion" className="hilumina">Iluminacion</Link>
                <Link to="/dj" className="hdj">Dj</Link>
                <Link to="/video" className="hvideo">Video</Link>
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