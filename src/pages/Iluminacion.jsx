import React from 'react'
import {connect} from 'react-redux'

import ProductDetails from '../components/ProductDetails'

const Iluminacion = ({iluminacion}) => {
    return(
        <div className="main-container">
            {iluminacion.map((product) => (
                <ProductDetails key={product.id} producto={product}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        iluminacion: state.productos.iluminacion
    }
}

export default connect(mapStateToProps, null)(Iluminacion)