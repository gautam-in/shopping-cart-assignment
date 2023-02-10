import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Navigate } from "react-router-dom"
const LazyHomepage = React.lazy(() => import('../pages/Homepage/index'));
const LazyProductListingPage = React.lazy(() => import('../pages/ProductListingPage/index'));
const LazyLogin = React.lazy(() => import('../pages/Login/index'));
const LazySignup = React.lazy(() => import('../pages/Signup/index'));


const AppRoutes = () => {
    const showToast = () => {
        toast.success('Form Submitted Successfully', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    return (


        <main>
            <ToastContainer />
            <Routes>
                <Route path='/' element={<React.Suspense fallback='Loading.....'><LazyHomepage /></React.Suspense>} />
                <Route path='/products' element={<React.Suspense fallback='Loading.....'><LazyProductListingPage /></React.Suspense>} />
                <Route path='/login' element={<React.Suspense fallback='Loading.....'><LazyLogin showToast={showToast} /></React.Suspense>} />
                <Route path='/signup' element={<React.Suspense fallback='Loading.....'><LazySignup showToast={showToast} /></React.Suspense>} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </main>
    )
}

export default AppRoutes