import Home from './screens/home';
import Header from './ui/elements/header';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import Products from './screens/products';
import Signup from './screens/signup';
import Login from './screens/login';
import Cart from './screens/cart';


function App() {
  const [userDetails] = useLocalStorage('userDetails');
  const { isLoggedIn } = userDetails || {};

  return (
    <div className="App">
      <header className='App-header'><Header /></header>

      <div className='app-container'>
        <Routes>
          <Route
            exact
            path="/"
            element={
              isLoggedIn ?
                <Navigate to={"/home"} /> : isLoggedIn === false ? <Navigate to={"/login"} />
                  :
                  <Navigate to={"/signup"} />
            }
          />
          <Route path='*' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Products />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>
      </div>
      <footer className='App-footer'> Copyright &copy; 2022 Sabka Bazzar Groceries supplies pvt. ltd.</footer>
    </div>
  );
}

export default App;
