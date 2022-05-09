import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppState from './contexts/appContext/AppState';
import Layout from './layout';
import './App.scss';

const App = () => {
    return (
        <AppState>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </AppState>
    );
};

export default App;
