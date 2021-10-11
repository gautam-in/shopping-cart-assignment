import { BrowserRouter, Switch, Route } from "react-router-dom";
import {QueryClientProvider,QueryClient} from 'react-query';
import Layout from "./Hoc/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./Container/Home";
const client=new QueryClient();
function App() {
  return (
    <BrowserRouter>
    <QueryClientProvider client={client}>
     <Layout>
      <Switch>
        <Route path="/products" component={()=>'Products'}/>
        <Route path="/signin" component={()=>'Signin'}/>
        <Route path="/register" component={()=>'Register'}/>
        {/* Redirect all other URLs to Home page */}
        <Route component={HomePage}/> 
      </Switch>
      </Layout>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
