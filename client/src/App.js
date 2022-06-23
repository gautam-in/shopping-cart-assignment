import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Login } from './components/Login';
import { Header } from './components/Header';
import { ProductListPage } from './components/ProductListPage';
import CopyrightIcon from '@mui/icons-material/Copyright';
import './App.css';
import { Register } from './components/Register';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='page-body'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductListPage />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
        </Routes>
      </div>
      <div className="page-footer-container">
        <div className="page-footer-container-content">
          Copyright {<CopyrightIcon />} 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
        </div>
      </div>
    </div>
  );
}

export default App;
