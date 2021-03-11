import React from 'react'
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'
import Iluminacion from '../pages/Iluminacion'
import Video from '../pages/Video'
import Dj from '../pages/Dj'
import Audio from '../pages/Audio'
import Streaming from '../pages/Streaming'
import Cotizacion from '../pages/Cotizacion'
import Clientes from '../pages/Clientes'
import Paquetes from '../pages/Paquetes'

const App = () => (
    <HashRouter>
        <Switch>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route exact path="/iluminacion" component={Iluminacion} />
                <Route exact path="/dj" component={Dj} />
                <Route exact path="/audio" component={Audio} />
                <Route exact path="/streaming" component={Streaming} />
                <Route exact path="/cotizacion" component={Cotizacion} />
                <Route exact path="/clientes" component={Clientes} />
                <Route exact path="/paquetes" component={Paquetes} />
            </Layout>
        </Switch>
    </HashRouter>
)

export default App