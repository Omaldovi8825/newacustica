import React from 'react'
import {Link} from 'react-router-dom'

import './styles/Quienes.css'

const Quienes = () => {
    const cover = 'src/components/imagenes/wAcustica1.jpg';

    return(
        <>
            <div id="quienesSomos">
                <table>
                    <tr>
                        <td rowSpan='3'><img src={cover} alt="product"/></td>
                        <td>
                            <h1 className="quienes-title">"Misión</h1>
                            <p>Proveer de todos los servicios premium requeri-
                                dos en materia de eventos a los clientes del mundo,

                                desarrollar festivales musicales propios, crear una
                                App/Red Social y cubrir la necesidad en streaming
                                para músicos, artistas, productores y Djs.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1 className="quienes-title">"Visión</h1>
                            <p>Buscamos proveer soluciones y herramientas
                                basadas en la pasión por la música y audio en el estilo

                                de vida premium creando experiencias con tecnolo-
                                gía y desarrollo de proyectos.</p>
                        </td>
                    </tr>
                    
                </table>
            </div>
            
        </>
    )
}

export default Quienes
//export default connect(mapStateToProps, null)(Quienes)
