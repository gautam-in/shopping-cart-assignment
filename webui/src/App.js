import { BrowserRouter, Switch, Route } from "react-router-dom";
import {QueryClientProvider,QueryClient} from 'react-query';
import Layout from "./Hoc/Layout/Layout";
import HomePage from "./Container/Home";
import ProductsPage from "./Container/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SigninPage from "./Container/Signin";
import SignupPage from "./Container/Signup";
import DataProvider from "./Context/dataContext";
import Checkout from "./Component/Cart/Checkout";

const client=new QueryClient();
function App() {
  return (
    <BrowserRouter>
    <QueryClientProvider client={client}>
    <DataProvider>
      <Layout>
        <Switch>
          <Route path="/products/:category?" component={ProductsPage}/>
          <Route path="/signin" component={SigninPage}/>
          <Route path="/register" component={SignupPage}/>
          <Route path="/checkout" component={Checkout}/>
          {/* Redirect all other URLs to Home page */}
          <Route component={HomePage}/> 
        </Switch>
        </Layout>
      </DataProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
