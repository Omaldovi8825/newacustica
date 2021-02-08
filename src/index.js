import React from 'react'
import {render} from 'react-dom'

import './global.css'

// import productsList from './db/products.json'
import productsList from './db/productos.js'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'

const composeEnhancer =   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const initialState = {
    productos: productsList
}
const store = createStore(reducers, initialState, composeEnhancer)

import App from './containers/App'

render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('app')
)