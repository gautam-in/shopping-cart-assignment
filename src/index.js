// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// console.log('public url: ', process.env)
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll }  from 'react-router-scroll';
import configureStore from './store';
// import 'whatwg-fetch';
import './styles/main.scss';
// import './assets/css/normalize.css';
import routes from './routes';

const store = configureStore(browserHistory, {});
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store} key="provider">
        <Router history={history} onUpdate={() => window.scrollTo(0, 0)} render={applyRouterMiddleware(useScroll())} >
            {routes()}
        </Router>
    </Provider>,
    document.getElementById('root')
);

