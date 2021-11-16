import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/LogIn/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/products' exact component={Products} />
        <Route path='/products/:id' exact component={Products} />
      </Switch>
      <Footer/>
    </BrowserRouter>

    
  );
}

export default App;
