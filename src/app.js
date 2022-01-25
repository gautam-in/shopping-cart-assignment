import React from 'react';
import { Provider } from "react-redux";
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/rows/footer';
import Header from './components/rows/header';
import Routing from './routing';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <div className='container main-content' >
                    <Routing />
                </div>
                <Footer />
            </Router>
        </Provider>
    )
}

export default App;