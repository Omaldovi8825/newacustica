import React from 'react'
import {connect} from 'react-redux'



import ProductDetails from '../components/ProductDetails'

const Streaming = ({streaming}) => {
    return(
        <div className="main-container">
            {streaming.map((product) => (
                <ProductDetails key={product.id} producto={product}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        streaming: state.productos.streaming
    }
}

export default connect(mapStateToProps, null)(Streaming)