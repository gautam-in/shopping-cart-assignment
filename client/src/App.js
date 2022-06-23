import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FourZeroFourPage from './pages/FourZeroFourPage';
import Loader from './components/Loader';
import Footer from './components/Footer';
import Header from './components/Header';
import theme from './theme';
import Signin from './pages/SignIn';
import Register from './pages/Register';
import Form from './components/Form';

const Home = lazy(() => import('./pages/Homepage'));
const Product = lazy(() => import('./pages/Products'));


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
                exact
                path="/products"
                element={<Product />}
              />
              <Route
                path='/:formName'
                element={<Form />}
              />
              <Route
                path='*'
                element={<FourZeroFourPage />}
              />
              <Route
                path='/product/:id'
                element={<Product />}
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
