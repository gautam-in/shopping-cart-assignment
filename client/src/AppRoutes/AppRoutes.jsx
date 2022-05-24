import {Routes,Route,Navigate} from 'react-router-dom';
import Homepage from '../Pages/Homepage/Homepage.page';
import SignIn from '../Pages/SignIn/SignIn.page';
import Register from '../Pages/Register/Register.page';
import Cart from '../Pages/Cart/Cart.page';
import ProductsListing from '../Pages/ProductsListing/ProductsListing.page';
import { useSelector } from 'react-redux';

export default function AppRoutes(){
    const user = useSelector(state => state.auth.loggedInUser)
    return (
        <Routes>
            <Route path="/" element={<Homepage/>} />

            <Route path="/Sign-in" 
            element={Object.keys(user).length ? <Navigate to='/'/> : <SignIn/>} 
            exact/>

            <Route path="/Register" 
            element={Object.keys(user).length ? <Navigate to='/'/> : <Register/>} 
            exact/>

            <Route path="/Cart" element={<Cart/>} exact/>

            <Route path="/Products" element={<ProductsListing/>} exact />
            <Route path="/Products/categoryId/:categoryId" element={<ProductsListing/>} />
    </Routes>
    )
};