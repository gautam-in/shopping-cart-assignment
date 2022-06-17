import { Routes,Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Header } from './components/Header';
import {ProductListPage} from './components/ProductListPage'
import './App.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='page-body'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductListPage/>}/>
      </Routes>  
      </div>     
    </div>
  );
}

export default App;
