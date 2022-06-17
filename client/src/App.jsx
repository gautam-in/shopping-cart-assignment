import AppLayout from "./layouts/appLayout";
import "./global.scss";
import HomeLayout from "./layouts/homeLayout";

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Banner from "./components/banner";


function App() {
  return (
    <AppLayout>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeLayout} />
          <Route exact path="/products" component={
            Banner
          } />
        </Switch>
      </ BrowserRouter >
    </AppLayout>
  );
}

export default App;
