import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Loading } from "./components/Loading";
import NotFound from "./components/NotFound";
import { BrowserRouter } from 'react-router-dom';
import "./global.scss";

const Home = lazy(() => import("./pages/home"));
const Products = lazy(() => import("./pages/products"));
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));


const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Loading> <Home /> </Loading>} />
                        <Route path="/products" element={<Loading> <Products /> </Loading>} />
                        <Route path="/login" element={<Loading> <Login /> </Loading>} />
                        <Route path="/register" element={<Loading> <Register /> </Loading>} />
                    </Route>
                    <Route
                        path="*"
                        element={<Loading> <NotFound /> </Loading>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;