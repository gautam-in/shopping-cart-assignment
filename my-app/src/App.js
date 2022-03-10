import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import Products from './Components/Products/Products';
import Navbar from './Components/Home/Navbar';
import LoginPage from './Components/Login-SignUp/loginPage';
import RegisterPage from './Components/Login-SignUp/registerPage';
import Minicart from './Components/Mini-Cart/minicart';

function App() {
  return(
    <div>
      <BrowserRouter>
        {<Navbar />}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/HomePage" element={<HomePage />} />
          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/Login" element={<LoginPage />} />
          <Route exact path="/Register" element={<RegisterPage />} />
          <Route exact path="/Minicart" element={<Minicart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
