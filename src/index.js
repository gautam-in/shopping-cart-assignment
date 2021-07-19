import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './redux/reducers'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(<Provider store={createStore(reducers)}> 
<Router>
  <App />
</Router>
</Provider>, document.getElementById('root'));
