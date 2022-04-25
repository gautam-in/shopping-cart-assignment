import React from 'react'
import NavigationComp from './Components/NavigationComp';
import ProductListingPage from './Pages/ProductListingPage';
import Footer from './Components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationComp />
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/products"><ProductListingPage /></Route>
          <Route exact path="/products/:id"><ProductListingPage /></Route>
          <Route exact path="/register"><SignUp/></Route>
          <Route exact path="/signin"><LogIn/></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
