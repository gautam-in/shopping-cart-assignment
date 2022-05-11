import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './navigation/TopNavbar';
import Plpage from './pages/Plpage';
import RegisterForm from './components/register/RegisterForm'
import LoginComp from './components/login/LoginComp';
import FooterComp from './components/footer/FooterComp';

function App() {
  return (
    <>
    <Routes>
      {/* <Route path="/" element={<TopNavbar/>}> */}
        <Route index element={<Home />} />
        <Route path='plp' element={<Plpage />} />
        <Route path='signup' element={<RegisterForm />} />
        <Route path='login' element={<LoginComp />} />
      {/* </Route> */}

      
    </Routes>
    <FooterComp />
    </>
    
    
  );
}

export default App;
