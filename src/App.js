import React from 'react'
import { Switch, Route} from "react-router-dom";
import Header from './Components/Header/Header' 
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import LoginPage from './Components/SignUp/LoginPage'
import RegisterPage from './Components/SignUp/RegisterPage'
import Product from './Components/Product/Product';
import CartPage from './Components/Cart/CartPage';


function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products"  render={(props) => <Product {...props} />} />
      <Route exact path="/signin" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/products/:id"  render={(props) => <Product {...props} />} />
      <Route exact path="/cartpage" render={(props) => <CartPage {...props} />}/>
    </Switch>
    <Footer />
  </>
  );
}

export default App;
