import { Route, Routes } from "react-router";
import { lazy, Suspense, useEffect, memo } from "react";
import { loadBanners, loadCategories, loadProduct } from "../Model/Model";
import { FooterComponent } from "../BaseComponent/Footer/FooterComponent";
import { HeaderComponent } from "../BaseComponent/Header/HeaderComponent";
const HomeComponent = lazy(() => import("../Pages/Home/HomeComponent"));
const SignInComponent = lazy(() => import("../Pages/SignIn/SignInComponent"));
const RegisterComponent = lazy(
    () => import("../Pages/Register/RegisterComponent")
);

const ProductComponent = lazy(
    () => import("../Pages/Product/ProductComponent")
);
const CartPageComponent = lazy(() => import("../Pages/Cart/CartPageComponent"));
const Page404Component = lazy(
    () => import("../Pages/Page404/Page404Component")
);

export const App: React.FC = memo(
    () => {
        useEffect(() => {
            loadBanners();
            loadCategories();
            loadProduct();
        }, []);
        
        return (
            <>
                <HeaderComponent />
                <Suspense fallback={<div>Page Is Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<HomeComponent />} />
                        <Route path="signin" element={<SignInComponent />} />
                        <Route path="register" element={<RegisterComponent />} />
                        <Route path="product" element={<ProductComponent />} />
                        <Route path="cart" element={<CartPageComponent />} />
                        <Route path="*" element={<Page404Component />} />
                    </Routes>
                </Suspense>
                <FooterComponent />
            </>
        );
    }
)
