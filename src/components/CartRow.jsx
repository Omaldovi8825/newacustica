import React from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../actions'

const CartRow = ({producto, removeFromCart, rowId}) => {
    const {name, description, qty, cover} = producto
    return (
        <tr>
            <td>
                <div className="cart-table-product-quantity">
                    <span>{qty}</span>
                    <span>X</span>
                    <img src={require(`../assets/images/${cover}`)} alt="producto"/>
                </div>
            </td>
            <td>{name}</td>
            <td><p>{description}</p></td>
            <td>
                <i className="fas fa-trash" onClick={() => removeFromCart(rowId)}></i>
            </td>
        </tr>
    )
}

const mapDispatchToProps = {
    removeFromCart
}

export default connect(null, mapDispatchToProps)(CartRow)