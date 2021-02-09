import React from 'react'

import './styles/ProductChacky.css'

const ProductDetails = () => {
    return(
        <div class="product-container">
            <div class="image-detail">
                <div class="texto">
                    <h1>Nombre del producto</h1>
                    <p>Descripción del Producto</p>
                    <button class="button-add">+</button>
                </div>
            </div>
            <div class="image-container">
                <ul class="slider">
                    <li id="slider1">
                        <img src="https://i.ibb.co/SwzxWvx/s3.jpg" />
                    </li>
                    <li id="slider2">
                        <img src="https://i.ibb.co/JHJgSXt/audio1.png" /> 
                    </li>
                    <li id="slider3">
                        <img src="https://i.ibb.co/jvM3LNT/cuadr6.png" />
                    </li>
                </ul>
                <ul class="slider-menu">
                    <li><a href="#slider1"></a></li>
                    <li><a href="#slider2"></a></li>
                    <li><a href="#slider3"></a></li>
                </ul>
            </div>
        </div>
    )
}

export default ProductDetails