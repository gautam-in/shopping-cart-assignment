import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Homepage, ProductListPage } from './pages';
import { Header } from './features/header/Header';

function App() {
  return (
    <div className="App">
      <div className='container app-container'>

        <Suspense fallback={<div>Loading...</div>}>
          <Router>
          <Header/>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/products" element={<ProductListPage/>} exact />
            <Route path="/products/:id" element={<ProductListPage/>} exact />
            {/* <Route path="/signin" element={Signin} exact />
            <Route path="/signup" element={Signup} exact /> */}
            </Routes>
          </Router>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
