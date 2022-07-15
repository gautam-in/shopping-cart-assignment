import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NoMatch from './pages/NoMatch/NoMatch';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

import './App.scss';


const ProductsPage = React.lazy(() => import("./pages/ProductsPage/ProductsPage"));
const HomePage = React.lazy(() => import("./pages/Homepage/Homepage"));
const SignIn = React.lazy(() => import("./pages/SignIn/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp/SignUp"));


function App() {


  return (
    <div className="container">
      <Header />
      <div className="content">

        <Routes>

          <Route path="/products" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ProductsPage />
            </Suspense>} />
          <Route path='/register' element={<Suspense fallback={<LoadingSpinner />}>
            <SignUp />
          </Suspense>} />
          <Route path='/' exact element={<Suspense fallback={<LoadingSpinner />}>
            <HomePage />
          </Suspense>} />
          <Route path='/signin' exact element={<Suspense fallback={<LoadingSpinner />}>
            <SignIn />
          </Suspense>} />
          <Route path="*" element={<NoMatch />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
