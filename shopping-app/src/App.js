import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import FruitsAndVegitables from './pages/FruitsAndVegitables';
import './App.css';
import {Switch,Route} from "react-router-dom"

function App() {
  return (
    <div >
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact patch="/fruitsandvegitables" component={FruitsAndVegitables} />
      </Switch>
    </div>
  );
}

export default App;
