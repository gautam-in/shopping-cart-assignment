import { BrowserRouter, Switch, Route } from "react-router-dom";
import {QueryClientProvider,QueryClient} from 'react-query';
import Layout from "./Hoc/Layout/Layout";
import HomePage from "./Container/Home";
import ProductsPage from "./Container/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SigninPage from "./Container/Signin";
import SignupPage from "./Container/Signup";

const client=new QueryClient();
function App() {
  return (
    <BrowserRouter>
    <QueryClientProvider client={client}>
     <Layout>
      <Switch>
        <Route path="/products/:category?" component={ProductsPage}/>
        <Route path="/signin" component={SigninPage}/>
        <Route path="/register" component={SignupPage}/>
        {/* Redirect all other URLs to Home page */}
        <Route component={HomePage}/> 
      </Switch>
      </Layout>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
