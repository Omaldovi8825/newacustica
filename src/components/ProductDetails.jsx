import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../actions'
import './styles/ProductDetails.css'

import {useHandleCounter} from '../hooks'

const ProductDetails = props => {
    const {id, name, description, cover} = props.producto
    
    const [quantity, setQuantity] = useHandleCounter()
    
    const newProduct = {
        ...props.producto,
        qty: Number(quantity)
    }

    const handleChange = e => {
        setQuantity(e.target.value)
    }

    return(
        <div className="product-details">
            <img src={require(`../assets/images/${cover}`)} alt="product"/>
            <h1 className="product-title">{name}</h1>
            <div className="sliding-card">
                <p>{description}</p>
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
    )
}

const mapDispatchToProps = {
    addToCart
}

export default connect(null, mapDispatchToProps)(ProductDetails)