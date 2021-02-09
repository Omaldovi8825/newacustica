import React from 'react'

import {connect} from 'react-redux'
import {addToCart} from '../actions'

import './styles/ProductDetails.css'

const ProductDetails = props => {
    const {id, name, description, price} = props.producto
    return(
        <div className="product-container">
            <div className="product-details">
                <h1 className="product-title">{name}</h1>
                <div className="sliding-card">
                    <p>{description}</p>
                    <p>${price} p/u</p>
                    <button 
                        type="button" 
                        onClick={() => props.addToCart(props.producto)}>
                            +
                    </button>
                </div>
            </div>
            <div className="product-slider">

            </div>
        </div>
    )
}

const mapDispatchToProps = {
    addToCart
}

export default connect(null, mapDispatchToProps)(ProductDetails)