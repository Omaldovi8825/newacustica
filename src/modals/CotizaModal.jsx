import React, { useState } from 'react'
import {createPortal} from 'react-dom'
import {connect} from 'react-redux'
import emailjs from 'emailjs-com'

import './styles/CotizaModal.css'

const CartModal = ({isClosed, closeModal, cart}) => {

    if(isClosed){
        return null
    }

    const [form, setForm] = useState({
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        fecha: '',
        asistentes: '',
        evento: ''
    })

    const reducedCart = cart.map( product => {
        return {
            name: product.name,
            qty: product.qty,
            id: product.id
        }
    })

    const cotizacion = {
        contacto: form,
        cart: reducedCart
    }

    const handleSubmit = e => {
        e.preventDefault()
        emailjs.sendForm('service_6gospjv', 'template_qudchnn', e.target, 'user_vtTQxlKUrU0SjMRoW0gzv')
        .then((result) => {
            alert('cotizacion enviada con exito');
        }, (error) => {
            console.log(error.text);
        });
        // console.log(cotizacion)
        // close()
    }

    const handleChange = e => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]:value
        })
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
                        <input 
                            type="text" 
                            name="nombre"
                            onChange={handleChange}
                            value={form.nombre}
                        />
                        <label htmlFor="email">E-mail</label>
                        <input 
                            type="email" 
                            name="email"
                            onChange={handleChange}
                            value={form.email}
                        />
                        <label htmlFor="telefono">Telefono</label>
                        <input 
                            type="text" 
                            name="telefono"
                            onChange={handleChange}
                            value={form.telefono}
                       />
                        <label htmlFor="direccion">Direccion del evento</label>
                        <input 
                            type="text" 
                            name="direccion"
                            onChange={handleChange}
                            value={form.direccion}
                        />
                        <label htmlFor="fecha">Fecha del evento</label>
                        <input 
                            type="date" 
                            name="fecha"
                            onChange={handleChange}
                            value={form.fecha}
                        />
                        <label htmlFor="asistentes">Asistentes</label>
                        <input 
                            type="number" 
                            name="asistentes"
                            onChange={handleChange}
                            value={form.asistentes}
                        />
                        <label htmlFor="evento">Tipo de evento</label>
                        <input 
                            type="text" 
                            name="evento"
                            onChange={handleChange}
                            value={form.evento}
                        />
                        {cart.map((product, index) => (
                            <div key={index}>
                                <input type="hidden" name={`foto${[index+1]}`} value={product.cover}/>
                                <input type="hidden" name={`id${[index+1]}`} value={`id:${product.id}`}/>                                                                                                                              
                                <input type="hidden" name={`cantidad${[index+1]}`} value={product.qty}/>                                
                                <input type="hidden" name={`message${[index+1]}`} value={product.name}/> 
                            </div>
                        ))}
                        <button type="submit" >Enviar Cotizacion</button>
                    </form>
                </div>
            </div>, 
            document.getElementById('modal'))
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartModal)