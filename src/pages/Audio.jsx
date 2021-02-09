import React from 'react'
import {connect} from 'react-redux'

import './styles/Audio.css'

import ProductDetails from '../components/ProductDetails'

const Audio = ({audio}) => {
    return(
        <div className="main-container">
            {audio.map((product) => (
                <ProductDetails key={product.id} producto={product}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        audio: state.productos.audio
    }
}

export default connect(mapStateToProps, null)(Audio)