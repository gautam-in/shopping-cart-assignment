import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { BannerView } from './features/banner/BannerView';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className='container app-container'>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Routes>
              <Route path="/" element={<BannerView />} />
              {/* <Route path="/products" component={Products} exact />
            <Route path="/products/:id" component={Products} exact />
            <Route path="/signin" component={Signin} exact />
            <Route path="/signup" component={Signup} exact /> */}
            </Routes>
          </Router>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
