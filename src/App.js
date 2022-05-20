import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Navigation from './routes/navigation';
import Register from './routes/authentication/register';
import SignIn from './routes/authentication/sign-in';
import ProductsTab from './routes/productsTab';
const App = () => {
    return (
      <Routes>
        <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='products/*' element={<ProductsTab/>}/>
            <Route path='sign-in' element={<SignIn/>}/>
            <Route path='register' element={<Register/>}/>
        </Route>
      </Routes>
  );
}

export default App;
