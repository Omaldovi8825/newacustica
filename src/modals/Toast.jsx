import React from 'react'
import {createPortal} from 'react-dom'
import {connect} from 'react-redux'

import './styles/Toast.css'

const Toast = ({open}) => {

    if(!open){
        return null
    }

    return(
        createPortal(
            <div className="toast">
                <p>Tu cotización ha sido enviada!!</p>
                <p>En breve nos pondremos en contacto</p>
            </div>,
            document.getElementById('toast'))
    )
}

const mapStateToProps = state => ({
    open: state.toastOpen
})

export default connect(mapStateToProps, null)(Toast)