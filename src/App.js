import Layout from './components/layout';
import {Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import Home from './components/pages/home';
import Product from './components/pages/products';
import Login from './components/pages/login';
import Register from './components/pages/signup';
import reducer from './store/reducer/reducer';
import "./App.scss"

function App() {
  const store = createStore(reducer, composeWithDevTools());
  return (
    <Provider store={store}>

      <div className="App">
        <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/products">
                <Product />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route path="/"  render={() => <Redirect to="/" />} />

              {/* <Route path="/" exact component={Home} />
              <Route path="/products" exact component={Product} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/" render={() => <Redirect to="/" />} /> */}
            </Switch>
        </Layout>


      </div>
    </Provider>
  );
}

export default App;