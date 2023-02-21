import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import { setProducts } from "../../redux/productSlice";
import { getProductsAPI } from "./api";
import "./Products.css";

function Products({}) {
  const productArr = useSelector((state) => state.products.products);
  const windowSize = useSelector((state) => state.user.windowSize);
  const dispatch = useDispatch();
  const currentCategory = useSelector(
    (state) => state.products.currentCategory
  );
  const [filteredProductArr, setFilteredProductArr] = useState([]);

  const fetchProducts=async()=>{
    const products=await getProductsAPI();
    dispatch(setProducts(products));
  }

  useEffect(() => {
    fetchProducts()
  },[])

  useEffect(() => {
    if (currentCategory) {
      setFilteredProductArr(
        productArr.filter((product) => product.category === currentCategory)
      );
    }else{
      setFilteredProductArr(productArr);
    }
  }, [currentCategory,productArr]);

  return (
    <div className="flex product-window-height overflow-hidden">
      {windowSize > 500 ? <Sidebar /> : null}
      <div
        className={`${
          windowSize > 500 ? "" : "w-full"
        } bg-white product-list-screen flex-wrap p-2 product-window-height overflow-auto`}
      >
        {filteredProductArr.map((product) => (
          <div key={product.id}>
            <ProductCard product={product}  />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
