import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Home from './components/home/Home';
import Products from './components/products/Products';
import './components/authentication/Login.scss';

// import logo from './resources/images/logo.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
         <Route exact path="/" component={Home} element={<Home />}/>
         <Route exact path="/home" component={Home} element={<Home />}/>
         <Route exact path="/login" component={Login} element={<Login />}/>
         <Route exact path="/register" component={Register} element={<Register />}/>
         <Route exact path="/products" component={Products}  element={<Products />} />
         {/* <Route path="/cart" component={Cart} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
