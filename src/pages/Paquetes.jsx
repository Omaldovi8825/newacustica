import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../actions'

import './styles/Paquetes.css'

import Slider from '../components/Slider'

const Paqutes = ({paquetes, addToCart}) => {
    const slides = [
        'https://i.ibb.co/VjwZXq1/wacustica-dj-cdj-3000.jpg',
        'https://i.ibb.co/sJKXGD7/wacustica-iluminacion-humo.jpg'
    ]
    
    return(
        <div className="main-container">
            {paquetes.map( paquete => {
                
                const {id, name, description, products} = paquete
                const newProduct = {
                    ...paquete,
                    qty: 1
                }

                return(
                    <div key={id} className="paquete-container">
                        <div className="banner-container">
                            <Slider slides={slides}/>
                            <h1>{name}</h1>
                        </div>
                        <div className="paquete-info">
                            <p className="description-product">{description}</p>
                            <p className="producto-titulo">Productos:</p>
                            <div className="paquetes-list">
                                <ul>
                                    {products.map((product, index) => (
                                        <li key={index}>{product}</li>
                                    ))}
                                </ul>
                            </div>
                            <button 
                                type="button" 
                                onClick={() => addToCart(newProduct)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                )
            })}
        </div> 
    )
}

const mapStateToProps = state => {
    return {
        paquetes: state.productos.paquetes
    }
}

const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Paqutes)