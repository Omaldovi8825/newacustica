import React, { useState } from 'react'
import {createPortal} from 'react-dom'

import './styles/CotizaModal.css'

const CartModal = ({isClosed, closeModal}) => {

    if(isClosed){
        return null
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log('enviar')
    }

    return(
        createPortal(
            <div className="modal">
                <i 
                    className="far fa-times-circle"
                    onClick={closeModal}
                ></i>
                <div className="cotiza-area">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre"/>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email"/>
                        <label htmlFor="telefono">Telefono</label>
                        <input type="text" name="telefono"/>
                        <label htmlFor="address">Direccion del evento</label>
                        <input type="text" name="address"/>
                        <label htmlFor="date">Fecha del evento</label>
                        <input type="date" name="date"/>
                        <label htmlFor="asistentes">Asistentes</label>
                        <input type="number" name="asistentes"/>
                        <label htmlFor="type">Tipo de evento</label>
                        <input type="text" name="type"/>                                
                    </form>
                    <button type="submit">Enviar Cotizacion</button>
                </div>
            </div>, 
            document.getElementById('modal'))
    )
}

export default CartModal