import React, { useState } from 'react'
import {createPortal} from 'react-dom'
import {connect} from 'react-redux'
import {openToast, closeToast} from '../actions'
import emailjs from 'emailjs-com'

import './styles/CotizaModal.css'

const CartModal = ({isClosed, closeModal, cart, openToast, closeToast}) => {

    if(isClosed){
        return null
    }

    const initialFormState = {
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        fecha: '',
        asistentes: '',
        evento: ''
    }

    const [form, setForm] = useState(initialFormState)

    const showToast = () => {
        openToast()
        setTimeout(() => {
            closeToast()
        }, 3000)
    }

    const handleSubmit = e => {
        e.preventDefault()
        // emailjs.sendForm('service_6gospjv', 'template_qudchnn', e.target, 'user_vtTQxlKUrU0SjMRoW0gzv')
        //     .then((result) => showToast())
        //     .catch(error => console.log(error.text))

        fetch('/api', {
            method: 'POST',
            body: JSON.stringify({
                name: form.nombre,
                email: form.email,
                phone: form.telefono
            }),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err.message))

        setForm(initialFormState)
        closeModal()
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
                        {cart.map((product, index) => {
                            const {name, id, qty} = product
                            return(
                                <input 
                                    key={index}
                                    type="hidden" 
                                    name={`product${[index+1]}`} 
                                    value={`${qty} ${name} [ id:${id} ]`}
                                /> 
                        )})}                    
                        <button type="submit" className="button-cotizacion-modal">Enviar Cotizacion</button>
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

const mapDispatchToProps = {
    openToast,
    closeToast
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal)