import React from 'react';
import "antd/dist/antd.min.css";
import './App.css';
import { message } from 'antd';
import {Route, Routes} from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import OrderSuccess from './Components/Order/OrderSuccess';
import ProductList from './Components/ProductList/ProductList';
import { app } from "../src/firebase";
import { setCurrentUser, setLoading } from '../src/Components/Signup/SignupAction'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';


function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAction = (email, password, from) => {
    if(email && password && from === "signup"){
      signup(email, password);
    }
    if(email && password && from === "signin"){
      signin(email, password);
    }
  }

  const signup = (email, password) => {
    const authentication = getAuth(app);
    //setting loading to true before authentication
    dispatch(setLoading(true));
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          //setting loading to false after authentication
          dispatch(setLoading(false));
          if(response ?.user){
            dispatch(setCurrentUser(response.user));
            message.success('Signup Successful!', 1);
            navigate('/');
          }
      }).catch(err => {
        //setting loading to false after authentication
        dispatch(setLoading(false));
        message.error(err.message, 1);
        console.log(err.message)
      })
  }

  const signin = (email, password) => {
    const authentication = getAuth(app);
    dispatch(setLoading(true));
    signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          dispatch(setLoading(false));
          if(response ?.user){
            dispatch(setCurrentUser(response.user));
            message.success('Signin Successful!', 1);
            navigate('/');
          }
        })
        .catch(err =>{
          dispatch(setLoading(false));
          message.error(err.message, 1);
          console.log(err.message)
        })
  }

  return (
    <div className="App">
        <Header/>  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/signup" element={<Signup handleAction={handleAction} title="Sign Up"/>} />
          <Route path="/login" element={<Login handleAction={handleAction} title="Sign In"/>} />
          <Route path="/order" element={<OrderSuccess/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
