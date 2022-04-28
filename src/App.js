import React, { createContext, useState } from "react";
import "./App.css";
import Login from "./Container/Login/login";
import Appbar from "./Container/Appbar/Appbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Container/Home/Home";
import SignUp from "./Container/SignUp/SignUp";
import BCDPage from "./Container/BCDPage/BCDPage";
import BCPage from "./Container/BCPage/BCPage";
import BevPage from "./Container/BevPage/BevPage";
import BHPage from "./Container/BHPage/BHPage";
import FVPage from "./Container/FVPage/FVPage";
import NotFoundPage from "./Container/NotFoundPage/index"
export const UserContext = createContext();
export const CartContext = createContext();
export const DrawerContext = createContext();
export const ProductDataContext = createContext();
function App() {
  const [Page, setPage] = useState("");
  const [Show, setShow] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [TotalCount, SetTotalCount] = useState(0);
  return (
    <UserContext.Provider value={[Page, setPage]}>
      <DrawerContext.Provider value={[Show, setShow]}>
        <CartContext.Provider value={[cartData, setCartData]}>
          <ProductDataContext.Provider value={[TotalCount, SetTotalCount]}>
            <div className="App">
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/Register" element={<SignUp />} />
                  <Route path="Product" element={<Appbar Page={Page} />}>
                    <Route path="fruit-and-veg" element={<FVPage />} />
                    <Route path="bakery-cakes-dairy" element={<BCDPage />} />
                    <Route path="beverages" element={<BevPage />} />
                    <Route path="beauty-hygiene" element={<BHPage />} />
                    <Route path="baby" element={<BCPage />} />
                  </Route>
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </BrowserRouter>
            </div>
          </ProductDataContext.Provider>
        </CartContext.Provider>
      </DrawerContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
