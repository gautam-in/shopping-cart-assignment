import AppLayout from "./layouts/appLayout";
import "./global.scss";
import HomeLayout from "./layouts/homeLayout";
import PlpLayout from "./layouts/plpLayout";

import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <AppLayout>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeLayout} />
          <Route exact path="/products" component={
           PlpLayout
          } />
        </Switch>
      </ BrowserRouter >
    </AppLayout>
  );
}

export default App;
