import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import cartReducer from "./store/reducers/cart"
import App from "./App"
const store = createStore(cartReducer)
ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('app'))