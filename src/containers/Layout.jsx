import React from 'react'

import Header from '../components/Header'
import Redes from '../components/Redes'

const Layout = ({children}) => {
    return(
        <>
            <Header />
            {children}
            <Redes />
        </>
    )
}

export default Layout