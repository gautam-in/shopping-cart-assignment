import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import LoginPageComp from './components/LoginPageComp';
import RagisterComp from './components/RagisterComp';
import HomeComp from './components/HomeComp';
import ProductComp from './components/ProductComp';

import 'sweetalert2/src/sweetalert2.scss'
import './styles/main.scss';

function App() {
  const [cartItem, setcartItem] = useState([]);

  const addToCartFunction = (newCartItem) => {
    const addNewCartItem = [...cartItem];

    var needToPush = true;
    if (!newCartItem.count) newCartItem.count = 1;
    addNewCartItem.map(item => {
      if (item.id === newCartItem.id) {
        ++item.count;
        needToPush = false
      }
      return item;
    })
    if (needToPush) {
      addNewCartItem.push(newCartItem);
    }
    setcartItem(
      addNewCartItem
    )
  }

  const handleCount = (value, id) => {
    const updateNewCountCartItem = [...cartItem];
    updateNewCountCartItem.map(item => {
      if (item.id === id) {
        item.count = value
      }
      return item;
    })
    setcartItem(
      updateNewCountCartItem
    )
  }

  return (
    <div className="wrapper" role="main">
      <HeaderComp cartItem={cartItem} handleCount={handleCount} />
      <Switch>
        <Route exact path="/" component={HomeComp}></Route>
        <Route path="/ragister" component={RagisterComp}></Route>
        <Route path="/login" component={LoginPageComp}></Route>
        <Route path="/product" render={(props) => (
          <ProductComp {...props} addToCartFunction={addToCartFunction} />
        )}></Route>
      </Switch>
      <FooterComp />
    </div>
  );
}
ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>, document.getElementById("app"));
if (module.hot) {
  module.hot.accept()
}
