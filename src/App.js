import { Routes, Route } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Home from './routes/home';
import Register from './routes/authentication/register';
import SignIn from './routes/authentication/sign-in';
import ProductsTab from './routes/productsTab';
import { useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase';
import { setCurrentUser } from './store/user/user.action';
import CartDropDown from './components/cart-dropdown';
import Container from './routes/container';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user) {
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    });
    return unsubscribe;
}, [dispatch]);

    return (
      <Routes>
        <Route path='/' element={<Container/>}>
            <Route index element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='products/*' element={<ProductsTab/>}/>
            <Route path='sign-in' element={<SignIn/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='cart' element={<CartDropDown/>}/>
        </Route>
      </Routes>
  );
}

export default App;
