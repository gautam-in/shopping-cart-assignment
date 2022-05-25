import {BrowserRouter} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Header from './Components/Header/Header.component';
import Footer from './Components/Footer/Footer.component';
import AppRoutes from './AppRoutes/AppRoutes';

function App() {
  const users = useSelector(state => state.auth.users);

  useEffect(()=>{
    window.localStorage.setItem('users',JSON.stringify(users));
  },[users]);

  return (
    <>
    <BrowserRouter>
    <div className="App">
        <Header />
    
      <AppRoutes />
      
      <Footer />
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
