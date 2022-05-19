

import {Route} from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';

import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (<>
<Header/>
   
     <Route path="/Login" >
     <Login></Login>
   </Route>   


   <Route path="/Signup" >
     <Signup></Signup>
   </Route>

   <Route path="/Home" >
      <Home></Home>
    </Route>

    <Route path="/Products" >
      <Products></Products>
    </Route>

    <Route path="/Cart" >
      <Cart></Cart>
    </Route>
    <Footer/>  
   </>

 
  );
}

export default App;
