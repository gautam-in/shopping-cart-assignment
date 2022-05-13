import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import Login from "./Container/Login/login";
import Appbar from "./Container/Appbar/Appbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Container/Home/Home";
import SignUp from "./Container/SignUp/SignUp";
import { MainUrl } from "./Container/Constant/index";
import MasterProduct from "./Container/MasterProduct/MasterProduct";
import NotFoundPage from "./Container/NotFoundPage/index";
export const UserContext = createContext();
export const CartContext = createContext();
export const DrawerContext = createContext();
export const ProductDataContext = createContext();
function App() {
  const [Page, setPage] = useState("");
  const [Show, setShow] = useState(false);
  const [categoryData, setcategoryData] = useState(null);
  const [cartData, setCartData] = useState([]);
  const [TotalCount, SetTotalCount] = useState(0);
  useEffect(() => {
    const url = MainUrl + "categories";
    const data = async () => {
      const categories = await fetch(url);
      const categoriesJson = await categories.json();

      setcategoryData(categoriesJson);
    };
    data();
  }, []);

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
                    {categoryData &&
                      categoryData.map((product, index) => (
                        <Route
                          path={product.key}
                          element={<MasterProduct product={categoryData} />}
                        />
                      ))}
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
