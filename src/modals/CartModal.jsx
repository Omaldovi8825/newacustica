import React from 'react'
import {createPortal} from 'react-dom'

import './styles/CartModal.css'

const CartModal = () => {
    return(
        createPortal(
            <div className="modal">

            </div>, 
            document.getElementById('modal'))
    )
}

export default CartModal