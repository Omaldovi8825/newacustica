import React, {useState} from 'react'

import {connect} from 'react-redux'
import {addToCart} from '../actions'

import './styles/ProductDetails.css'

const useHandleCounter = () => {
    const [counter, setCounter] = useState(1)

    if(counter < 1){
        setCounter(1)
    }

    return [counter, setCounter]
}

const ProductDetails = props => {
    const {id, name, description, price} = props.producto
    
    const [quantity, setQuantity] = useHandleCounter()
    
    const newProduct = {
        ...props.producto,
        qty: Number(quantity)
    }

    const handleChange = e => {
        setQuantity(e.target.value)
    }

    return(
        <div className="product-container">
            <div className="product-details">
                <h1 className="product-title">{name}</h1>
                <div className="sliding-card">
                    <p>{description}</p>
                    <p>${price} p/u</p>
                    <div className="adding-section">
                        <input 
                            type="number"
                            onChange={handleChange}
                            value={quantity}
                        />
                        <button 
                            type="button" 
                            onClick={() => props.addToCart(newProduct)}>
                                +
                        </button>
                    </div>
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