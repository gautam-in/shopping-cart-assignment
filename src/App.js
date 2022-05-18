import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Navigation from './routes/navigation';
import Products from './routes/products';
import Register from './routes/authentication/register';
import SignIn from './routes/authentication/sign-in';
const App = () => {
    return (
      <Routes>
        <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='sign-in' element={<SignIn/>}/>
            <Route path='register' element={<Register/>}/>
        </Route>
      </Routes>
  );
}

export default App;
