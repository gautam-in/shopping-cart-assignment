import './App.css';
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import ProductInfo from './components/PIP/ProductInfo';
import Header from './components/Header/Header';

function App() {
 return(
  <>
  <BrowserRouter>
  <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/productInfo" element={<ProductInfo/>}/>
      </Routes>
  </BrowserRouter>
  </>
 )
}

export default App;
