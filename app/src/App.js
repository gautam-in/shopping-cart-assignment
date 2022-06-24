import './App.scss';
import Home from './components/home/home.component'
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/header/header.component';
import Products from './components/products/product.component';


function App() {
  return (
        <Routes>
          <Route path="/" element={<Navigation />} >
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
  );
}

export default App;
