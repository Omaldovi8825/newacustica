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

const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Layout>
                <Route exact path="/iluminacion" component={Iluminacion} />
                <Route exact path="/video" component={Video} />
                <Route exact path="/dj" component={Dj} />
                <Route exact path="/audio" component={Audio} />
                <Route exact path="/streaming" component={Streaming} />
                <Route exact path="/cotizacion" component={Cotizacion} />
            </Layout>
        </Switch>
    </HashRouter>
)

export default App