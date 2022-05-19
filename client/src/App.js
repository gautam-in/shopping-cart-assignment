import {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

import Header from './Components/Header/Header.component';
import Footer from './Components/Footer/Footer.component';
import AppRoutes from './AppRoutes/AppRoutes';

function App() {

  useEffect(()=>{
    axios.get('http://localhost:5000/banners').then(res=>console.log(res.data))
  },[]);

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
