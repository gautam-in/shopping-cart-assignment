import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll }  from 'react-router-scroll';
import configureStore from './store';
import './styles/main.scss';
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

