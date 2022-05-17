import {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

import AppRoutes from './AppRoutes/AppRoutes';

function App() {

  useEffect(()=>{
    axios.get('http://localhost:5000/banners').then(res=>console.log(res.data))
  },[]);

  return (
    <>
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        Header
      </header>
    </div>

    <AppRoutes />
    
    </BrowserRouter>

    <footer>
      Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
    </footer>
    </>
  );
}

export default App;
