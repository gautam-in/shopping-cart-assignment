import Layout from "./components/Layout/Layout";
import './App.css';
import { Routes, Route } from "react-router-dom"
import React, { lazy, Suspense } from 'react';

const Home = lazy(() => import('./components/Pages/Home/Home'));
const Products = lazy(() => import('./components/Pages/Products/Products'));
const SignIn =lazy(() => import('./components/Pages/Signin/Signin'));
const Register = lazy(() => import('./components/Pages/Register/Register'));

function App() {
  return (
    <Layout title="e-commerce app">
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:categoryId" element={<Products />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/register" element={<Register />}></Route>
            </Routes> 
            </Suspense>          
      </Layout>
  );
}

export default App;