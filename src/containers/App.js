import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'
import Iluminacion from '../pages/Iluminacion'
import Video from '../pages/Video'
import Dj from '../pages/Dj'
import Audio from '../pages/Audio'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Layout>
                <Route exact path="/iluminacion" component={Iluminacion} />
                <Route exact path="/video" component={Video} />
                <Route exact path="/dj" component={Dj} />
                <Route exact path="/audio" component={Audio} />
            </Layout>
        </Switch>
    </BrowserRouter>
)

export default App