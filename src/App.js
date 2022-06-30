import './App.css';
import { Login, Navbar, Signup, Home, Products } from './components/index-components';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "login" element = {<Login />} />
        <Route path = "signup" element = {<Signup />} />
        <Route path = "products" element = {<Products />} />
      </Routes>
    </div>
  );
}

export default App;
