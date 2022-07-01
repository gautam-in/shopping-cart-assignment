import './App.css';
import { Login, Navbar, Signup, Home, Products, Cart } from './components/index-components';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "login" element = {<Login />} />
        <Route path = "signup" element = {<Signup />} />
        <Route path = "products" element = {<Products />}>
          <Route path = "cart" element = {<Cart />} />
        </Route>
        <Route path = "cart" element = {<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
