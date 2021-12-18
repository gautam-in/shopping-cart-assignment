import './App.css';
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import ProductInfo from './components/PIP/ProductInfo';

function App() {
 return(
  <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/productInfo" element={<ProductInfo/>}/>
      </Routes>
  </BrowserRouter>
 )
}

export default App;
