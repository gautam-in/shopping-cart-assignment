import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ProductsPage from "./pages/ProductsDisplay/ProductsPage.component";

import './App.css';
import {Switch,Route} from "react-router-dom"

function App() {
  return (
    <div >
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route  path="/products" component={ProductsPage} />
      </Switch>
    </div>
  );
}

export default App;
