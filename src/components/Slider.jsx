import React from 'react'

import './styles/Slider.css'

import {useCounterLimit} from '../hooks'

const Slider = ({slides}) => {

    const [counter, setCounter] = useCounterLimit(slides.length)

    return(
        <div className="product-slider">
            <img src={slides[counter]} alt=""/>
            <button 
                className="arrow" 
                type="button"
                onClick={() => setCounter(counter-1)}
            >
                &#10094;
            </button>
            <button 
                className="arrow" 
                type="button"
                onClick={() => setCounter(counter+1)}
            >
                &#10095;
            </button>
        </div>
    )
}

export default Slider