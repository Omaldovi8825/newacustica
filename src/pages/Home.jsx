import React from 'react'
import {Link} from 'react-router-dom'

import './styles/Home.css'

const Home = () => {
    return(
        <>
            <Link className="main-menu-item" to="/audio">
                <section className="parallax" id="seccion2">
                    <h1>AUDIO</h1>
                </section>            
            </Link>
            <Link className="main-menu-item" to="/iluminacion">
                <section className="parallax" id="seccion1">
                    <h1>ILUMINACION</h1>
                </section>            
            </Link>
            <section className="parallax" id="seccion3">
                <h1>VIDEO</h1>
            </section>
            <section className="parallax" id="seccion1">
                <h1>DJ</h1>
            </section>
            <section className="parallax" id="seccion2">
                <h1>PAQUETES</h1>
            </section>
        </>
    )
}

export default Home