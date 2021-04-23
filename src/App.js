import React from "react";
import Header from './components/molecules/Header';
import Home from './components/pages/Home';
import SignInPage from './components/pages/SignInPage';
import RegisterPage from './components/pages/RegisterPage';
import ProductListingPage from './components/pages/ProductListingPage';
import { Route, Switch, BrowserRouter as Router, Redirect } from  'react-router-dom';
function App (){
    
  
    return (
        <>
             <Router>
          <Header/>

          <Switch>
                <Route exact path='/'>
                    <Redirect to="/home" />
                </Route>
                <Route exact path='/home'>
                    <Home/>
                </Route>
                <Route exact path='/products'>
                    <ProductListingPage/>
                </Route>
                <Route exact path='/signin' component={SignInPage} />
                <Route exact path='/register' component={RegisterPage} />
                
                
          </Switch>
          
          
        </Router>
        
        
        </>


    )
  
}

export default App;