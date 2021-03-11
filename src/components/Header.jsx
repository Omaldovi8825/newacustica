import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import './styles/Header.css'

const Header = props => {

    const total = props.cart.reduce((acum, producto) => acum + producto.qty, 0)

    return(
        <div className="header">
            <Link to="/">
                <img src="https://i.ibb.co/LCmRnxP/logo-dorado-Mesa-de-trabajo-1.png" alt=""/>
            </Link>
            <nav className="menu">
                <Link to="/audio">Audio</Link>
                <Link to="/iluminacion">Iluminacion</Link>
                <Link to="/streaming">Streaming y video</Link>
                <Link to="/dj">Dj</Link>
                <Link to="/paquetes">Paquetes</Link>
            </nav>
            <div className="cart">
                <Link to="/cotizacion">
                    <img src="https://i.ibb.co/k9KHx3Z/cotizadorado.png" alt="cotizacion"/>
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