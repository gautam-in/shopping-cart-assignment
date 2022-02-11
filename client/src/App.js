import React, {createContext, useReducer, Suspense, lazy, useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Home from './components/home/Home';
import Loading from './components/common/Loading';
import Sidedrawer from './components/cart/SideDrawer';

import fetchReducer, {initialState} from './dataControls/fetchReducer';
import cartReducer, {initialState as initialStateCart} from './dataControls/cartReducer';
import {AppContext} from './components/common/AppContext';

// import logo from './resources/images/logo.png';
import './App.css';

const Products  = lazy(() => import('./components/products/Products'));
// export const AppContext = createContext({});

function App() {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const [drawer, setState] =  useState({showbd:false})
  const [cartProducts, setProducts] =  useState({});
  // const [category, setCategory]= useState([]);

  let backdroptoggle=()=>{
    setState((prevState)=>
    {
            return({showbd:!prevState.showbd})
            
            }
       )
    }
  let setProdQty = (data)=>{
    let prodQty = cartProducts;
    if(data.qty>0)
    {
      prodQty[data.key].qty = data.qty;
    }
    else{
      const { [data.key]:removed, ...dataRest } = cartProducts;
      prodQty = dataRest
    }
    setProducts({...prodQty})
  }


  // const [cartState, cartDispatch] = useReducer(cartReducer, initialStateCart);

  return (
    <AppContext.Provider value={{
      state,
      dispatch
    }}>
    <Router>
      <div className="App">
        <Suspense fallback={<Loading name="Header" />}>
          <Header toggle={backdroptoggle} cartProducts = {cartProducts}/>
        </Suspense>
        <Suspense fallback={<Loading name="Component" />}>
        <Routes>
         <Route exact path="/" component={Home} element={<Home />}/>
         <Route exact path="/login" component={Login} element={<Login />}/>
         <Route exact path="/register" component={Register} element={<Register />}/>
         <Route exact path="/products" component={Products}  element={<Products addToCart={setProducts} products={cartProducts}/>} />
         {/* <Route exact path="/cart" component={Sidedrawer} element={<Sidedrawer/>}/> */}
        </Routes>
        </Suspense>
        <Sidedrawer open={drawer.showbd} close={backdroptoggle} products={cartProducts} setQty={setProdQty}/>
        <Suspense fallback={<Loading name="Footer" />}>
          <Footer />
        </Suspense>
      </div>
    </Router>
    </AppContext.Provider>
  );
}

export default App;
