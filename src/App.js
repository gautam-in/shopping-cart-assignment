
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import ProductList from './pages/productList';
import Login from './pages/login';
import Register from './pages/register';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/signIn" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
    </Provider>
  );
}

export default App;
