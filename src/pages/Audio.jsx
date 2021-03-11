import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../actions'

import './styles/Audio.css'
import microfono from '../assets/images/wacustica_audio_microfono_alambrico_shure.jpeg'
import ProductDetails from '../components/ProductDetails'

import {useHandleCounter} from '../hooks'

const Audio = ({audio, microfonia, addToCart}) => {
    return(
        <div className="main-container">
            {audio.map((product) => (
                <ProductDetails key={product.id} producto={product}/>
            ))}
            <div className="product-details">
                <img src={microfono} alt="product"/>
                <h1 className="product-title">Microfonia</h1>
                <div className="sliding-card">
                    {microfonia.map(microfono => {

                        const [quantity, setQuantity] = useHandleCounter()

                        const handleChange = e => {
                            setQuantity(e.target.value)
                        }

                        const newProduct = {
                            ...microfono,
                            qty: Number(quantity)
                        }
                
                        return(
                            <div key={microfono.id}>
                                <p>{microfono.description}</p>
                                <div className="adding-section">
                                    <input 
                                        type="number"
                                        onChange={handleChange}
                                        value={quantity}
                                    />
                                    <button 
                                        type="button" 
                                        onClick={() => addToCart(newProduct)}>
                                            +
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>   
    )
}

const mapStateToProps = state => {
    return {
        audio: state.productos.audio,
        microfonia: state.productos.microfonia
    }
}

const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Audio)