import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Route>
     </Routes>      
  );
}

export default App;
