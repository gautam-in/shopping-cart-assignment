import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
const LazyHomePage = React.lazy(() => import('../pages/Home/index'));
const LazyProductPage = React.lazy(() => import('../pages/ProductList/index'));
const LazyLogin = React.lazy(() => import('../pages/Login/index'));
const LazySignup = React.lazy(() => import('../pages/SignUp/index'));

const AppRoutes = () => (
    <main>
        <Routes>
            <Route path='/' element={<React.Suspense fallback='Loading.....'><LazyHomePage /></React.Suspense>} />
            <Route path='/products' element={<React.Suspense fallback='Loading.....'><LazyProductPage /></React.Suspense>} />
            <Route path='/login' element={<React.Suspense fallback='Loading.....'><LazyLogin /></React.Suspense>} />
            <Route path='/signup' element={<React.Suspense fallback='Loading.....'><LazySignup /></React.Suspense>} />
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    </main>
)

export default AppRoutes