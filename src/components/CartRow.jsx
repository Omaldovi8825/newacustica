import React, {useState} from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../actions'

const CartRow = ({producto, removeFromCart, rowId}) => {
    const {name, description, qty, cover} = producto
    return (
        <tr>
            <td className="cart-table-product-quantity" >
                <span>{qty}</span>
                <span>X</span>
                <img src={cover} alt="producto"/>
            </td>
            <td style={{width:'20%'}}>{name}</td>
            <td style={{width:'50%'}}><p>{description}</p></td>
            <td  style={{width:'10%'}}>
                <i className="fas fa-trash" onClick={() => removeFromCart(rowId)}></i>
            </td>
        </tr>
    )
}

const mapDispatchToProps = {
    removeFromCart
}

export default connect(null, mapDispatchToProps)(CartRow)