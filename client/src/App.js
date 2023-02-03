import {BrowserRouter ,Routes,Route,Navigate} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/SignIn';
import Register from './Pages/Register/Register';
import SideBarProductsData from './Pages/SideBarProductsData/SideBarProductsData';

function App() {
  const users = useSelector(state => state.auth.users);
  const user = useSelector(state => state.auth.loggedInUser);

  useEffect(()=>{
    window.localStorage.setItem('users',JSON.stringify(users));
  },[users]);

  return (
    <>
    <BrowserRouter>
    <div className="container-fluid">
        <Header />
    
        <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="/SignIn" 
            element={Object.keys(user).length ? <Navigate to='/'/> : <Login/>} 
            exact/>

            <Route path="/Register" 
            element={Object.keys(user).length ? <Navigate to='/'/> : <Register/>} 
            exact/>

            <Route path="/Products" element={<SideBarProductsData/>} exact />
            <Route path="/Products/categoryId/:categoryId" element={<SideBarProductsData/>} />
       </Routes>
      
      <Footer />
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
