import {Routes,Route} from 'react-router-dom';
import Homepage from '../Pages/Homepage/Homepage.page';
import SignIn from '../Pages/SignIn/SignIn.page';
import Register from '../Pages/Register/Register.page';
import Cart from '../Pages/Cart/Cart.page';
import ProductsListing from '../Pages/ProductsListing/ProductsListing.page';

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/Sign-in" element={<SignIn/>} exact/>
            <Route path="/Register" element={<Register/>} exact/>
            <Route path="/Cart" element={<Cart/>} exact/>
            <Route path="/Products" element={<ProductsListing/>} exact/>
    </Routes>
    )
};