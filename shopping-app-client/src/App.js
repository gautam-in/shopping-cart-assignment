import  Header  from "./components/header/Header";
import Register from "./components/signup/Register";
import './App.css';
import { Routes , Route  } from 'react-router-dom'
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import PLP from "./components/plp/PLP";
function  App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/register' element={<Register/>} />
      <Route path='/products' element={<PLP/>} />
      
      <Route path='/' element={<Home/>} />
    </Routes>
    <Footer/>
    
    </>
    
    
  );
}

export default App;
