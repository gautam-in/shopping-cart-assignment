import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import FourZeroFourPage from './pages/FourZeroFourPage';
import Header from './components/Header';
import Loader from './components/Loader';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const Home = lazy(() => import('./pages/Homepage'));
const Product = lazy(() => import('./pages/Products'));
const Form = lazy(() => import('./components/Form'));


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<Loader />}>
          <div className="container">
            <Header />
            <Routes>
              <Route
                exact
                path="/"
                element={<Home />}
              />
              <Route
                path='/product/:id'
                element={<Product />}
              />
              <Route
                path='/form/:formName'
                element={<Form />}
              />
              <Route
                path='*'
                element={<FourZeroFourPage />}
              />
            </Routes>
            <Footer />
          </div>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}
export default App;
