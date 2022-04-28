import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink,  } from 'react-router-dom';

import './style.css';
import './customreposnsive.css';
import { SignUp } from "./Pages/signUp/SignUp";
import { SignIn } from "./Pages/signIn/SignIn";
import Home from "./Pages/home/Home";
import ListofItem from "./Pages/listofitem/ListofItem";
import { history } from './stores/_helpers';


function App(props) {
  console.log('App.js ------ ', props.store)
  return  (
    <React.Fragment>
        <Router history={history}> 
                  <Route exact path="/signin" component={SignIn} />
                  <Route exact path="/" component={SignUp} />
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/product" component={ListofItem} />

        </Router>
       
    </React.Fragment>
  )
}

export default App;
