import React, {useState} from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../actions'

const CartRow = ({producto, removeFromCart}) => {
    const {name, description, price, id, qty} = producto

    return (
        <tr>
            <td className="cart-table-product-quantity">
                <span>{qty}</span>
                <span>X</span>
                <img src="https://i.ibb.co/2vjM6bf/s4.jpg" alt="producto"/>
            </td>
            <td>
                <h3>{name}</h3>
                <p>{description}</p>
            </td>
            <td>
                <p>${price * qty}</p>
            </td>
            <td>
                <i className="fas fa-trash" onClick={() => removeFromCart(id)}></i>
            </td>
        </tr>
    )
}

const mapDispatchToProps = {
    removeFromCart
}

export default connect(null, mapDispatchToProps)(CartRow)