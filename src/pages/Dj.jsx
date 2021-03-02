import React from 'react'
import {connect} from 'react-redux'

import ProductDetails from '../components/ProductDetails'

const DJ = ({dj}) => {
    return(
        <div className="main-container">
            {dj.map((product) => (
                <ProductDetails key={product.id} producto={product}/>
            ))}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        dj: state.productos.dj
    }
}

export default connect(mapStateToProps, null)(DJ)