import './App.css';
import { Route, Routes, Navigate, BrowserRouter  } from "react-router-dom";
import Home from './Components/Home/Home';
import Product from './Components/Products/Products'
import Sign from './Components/SignPage/Sign';
import Register from './Components/Register/Register';
import { useSelector } from 'react-redux';

function App() {
const currentUser= useSelector(state=>state.register.currentUser);
const registered = useSelector(state=>state.register.register);

  return (
    <>
    <BrowserRouter>
    <Routes>
    {/* element={currentUser.authorized?<Home/>:<Sign/>} */}
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Product/>} />
          <Route
            path="/login"
            element={currentUser.authorized ? <Navigate to="/" /> : <Sign />}
          />
          <Route path="/register"  element={ <Register />} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
