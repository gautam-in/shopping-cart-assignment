import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch  } from "react-router-dom"
import Login from './components/login/index';
import Register from './components/signUp/index'

class App extends Component {
  render(){
    return (

      <Router>
        <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        </Switch>
    </Router>
    )
   }
  }

export default App;