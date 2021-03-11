import React, { useState } from 'react'

import './styles/Redes.css'
import LogoRedes from '../assets/images/redes_contacto.png'
import LogoWhatsapp from '../assets/images/redes_whatsapp.png'
import LogoFacebook from '../assets/images/redes_facebook.png'
import LogoInstagram from '../assets/images/redes_insta.png'
import LogoTwitter from '../assets/images/redes_twitter.png'

const Redes = () => {
    const initialSMState = {
        main: 80,
        whatsapp: 15,
        facebook: 15,
        instagram: 15,
        twitter: 15,
    }

    const [redesPosition, setRedesPosition] = useState(initialSMState)

    const [mediaState, setMediaState] = useState('closed')

    const despliegaRedes = () => {
        const inicio = 80
        const desplazamiento = 70
        if(mediaState === 'closed'){
            setRedesPosition({
                main: 50,
                whatsapp: inicio,
                facebook: inicio + desplazamiento,
                instagram: inicio + desplazamiento*2,
                twitter: inicio + desplazamiento*3
            })
            setMediaState('opened')
        } else {
            setRedesPosition(initialSMState)
            setMediaState('closed')
        }
    }

    return(
        <div className="redes">
            <button onClick={despliegaRedes}>
                <img 
                    className="redes-btn" 
                    src={LogoRedes} 
                    style={{width: `${redesPosition.main}px`}}
                    alt="boton redes"
                />
            </button>
            <a href="#" target="_blank">
                <img 
                    className="sm-button" 
                    style={{right: `${redesPosition.whatsapp}px`}} 
                    src={LogoWhatsapp} 
                    alt="logo whastapp"
                />
            </a>
            <a href="#" target="_blank">
                <img 
                    className="sm-button" 
                    style={{right: `${redesPosition.facebook}px`}} 
                    src={LogoFacebook} 
                    alt="logo facebook"
                />
            </a>
            <a href="#" target="_blank">
                <img 
                    className="sm-button" 
                    style={{right: `${redesPosition.instagram}px`}} 
                    src={LogoInstagram} 
                    alt="logo instagram"
                />
            </a>
            <a href="#" target="_blank">
                <img 
                    className="sm-button" 
                    style={{right: `${redesPosition.twitter}px`}} 
                    src={LogoTwitter} 
                    alt="logo twitter"
                />
            </a>
        </div>
    )
}

export default Redes 