import React from 'react'
import {Link} from 'react-router-dom'

import './styles/Home.css'

const Home = () => {
    return(
        <>
            <Link className="main-menu-item" to="/quienes">
                <section className="parallax" id="seccion6">
                    <h1>¿Quiénes somos?</h1>
                </section>            
            </Link>
            <Link className="main-menu-item" to="/audio">
                <section className="parallax" id="seccion1">
                    <h1>AUDIO</h1>
                </section>            
            </Link>
            <Link className="main-menu-item" to="/iluminacion">
                <section className="parallax" id="seccion2">
                    <h1>ILUMINACION</h1>
                </section>            
            </Link>
            <Link className="main-menu-item" to="/video">
                <section className="parallax" id="seccion3">
                    <h1>VIDEO</h1>
                </section>            
            </Link>
            <Link className="main-menu-item" to="/dj">
                <section className="parallax" id="seccion4">
                    <h1>DJ</h1>
                </section>            
            </Link>
            <Link className="main-menu-item" to="/paquetes">
                <section className="parallax" id="seccion5">
                    <h1>PAQUETES</h1>
                </section>            
            </Link>
        </>
    )
}

export default Home

// {contacto: {…}, cart: Array(2)}
// cart: Array(2)
// 0:
// id: 1
// name: "Poste"
// qty: 1
// __proto__: Object
// 1:
// id: 2
// name: "Duo de poste"
// qty: 1
// __proto__: Object
// length: 2
// __proto__: Array(0)
// contacto:
// asistentes: "20"
// direccion: "av benito juarez garcia sur 603"
// email: "romavi20@hotmail.com"
// evento: "boda"
// fecha: "2021-02-20"
// nombre: "Omar"
// telefono: "+527222700664"
// __proto__: Object
// __proto__: Object