import React from 'react'
import {connect} from 'react-redux'


import ProductDetails from '../components/ProductDetails'

const Video = ({video}) => {
    return(
        <div className="main-container">
            {video.map((product) => (
                <ProductDetails key={product.id} producto={product}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        video: state.productos.video
    }
}

export default connect(mapStateToProps, null)(Video)