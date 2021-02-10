import React, {useState} from 'react'

import {connect} from 'react-redux'
import CartRow from '../components/CartRow'
import CotizaModal from '../modals/CotizaModal'

import './styles/Cotizacion.css'

const Cotizacion = ({cart}) => {
    const [isClosed, setIsclosed] = useState(true)

    return(
        <>
            <div className="cart-table-container">
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Cantidad</th>
                            <th>Detalles</th>
                            <th>Precio</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product, index) => (
                            <CartRow key={index} producto={product} />
                        ))}
                    </tbody>
                </table>
                <button 
                    type="button"
                    className="cotizacion-button"
                    onClick={() => setIsclosed(false)}
                >
                    Cotizar
                </button>
            </div>
            <CotizaModal 
                isClosed={isClosed} 
                closeModal={() => setIsclosed(true)}
            />
        </>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps, null)(Cotizacion)