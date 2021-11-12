import { Route, Routes } from "react-router";
import { FooterComponent } from "../BaseComponent/Footer/FooterComponent";
import { HeaderComponent } from "../BaseComponent/Header/HeaderComponent";
import { RegisterComponent } from "../Pages/Register/RegisterComponent";
import { SignInComponent } from "../Pages/SignIn/SignInComponent";
import HomeComponent from "../Pages/Home/HomeComponent";
import ProductComponent from "../Pages/Product/ProductComponent";
import CartPageComponent from "../Pages/Cart/CartPageComponent";
import { loadBanners, loadCategories, loadProduct } from "../Model/Model";
import { useEffect } from "react";

export const App: React.FC<{}> = () => {
    useEffect(() => {
        loadBanners();
        loadCategories();
        loadProduct();
    }, []);
    return (
        <>
            <HeaderComponent />
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="signin" element={<SignInComponent />} />
                <Route path="register" element={<RegisterComponent />} />
                <Route path="product" element={<ProductComponent />} />
                <Route path="cart" element={<CartPageComponent />} />
            </Routes>
            <FooterComponent />
        </>
    );
};
