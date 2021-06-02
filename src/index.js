import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { createStore,compose,applyMiddleware } from 'redux'
import cartReducer from "./store/reducers/cart"
import thunk from "redux-thunk"
import App from "./App"
const composeEnhancers=compose(applyMiddleware(thunk))
const store = createStore(cartReducer,composeEnhancers)
ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
<App /></BrowserRouter>
</Provider>, document.getElementById('root'))