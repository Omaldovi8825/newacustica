import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import './styles/Header.css'

import CartModal from '../modals/CartModal'

const Header = props => {

    const total = props.cart.reduce((acum, producto) => acum + producto.price, 0)

    return(
        <div className="header">
            <Link to="/">Home</Link>
            <div className="menu">
                <Link to="/audio">Audio</Link>
                <Link to="/iluminacion">Iluminacion</Link>
                <Link to="/dj">Dj</Link>
                <Link to="/video">Video</Link>
            </div>
            <div className="cart">
                <i className="fas fa-shopping-cart"></i>
                <span>${total}</span>
            </div>
            <CartModal />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps,null)(Header)