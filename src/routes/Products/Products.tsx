import React, { useState, useEffect,useRef } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import { setProducts } from "../../redux/productSlice";
import { getProductsAPI } from "./api";
import "./Products.css";
import { GlobalReducerInterface, Product } from "../../redux/interface";

const Products:React.FC<{}>=({})=> {
  const productArr:Product[] = useSelector((state:GlobalReducerInterface) => state.products.products);
  const windowSize = useSelector((state:GlobalReducerInterface) => state.user.windowSize);
  const firstCardRef:React.Ref<any>|null=useRef(null)
  const dispatch = useDispatch();
  const currentCategory = useSelector(
    (state:GlobalReducerInterface) => state.products.currentCategory
  );
  const [filteredProductArr, setFilteredProductArr]:[Product[],Function] = useState([]);

  const fetchProducts=async()=>{
    const products=await getProductsAPI();
    dispatch(setProducts(products));
  }

  const shiftFocus=()=>{
    if(firstCardRef?.current){
      firstCardRef.current.focus();
    }
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
      {windowSize && windowSize > 500 ? <Sidebar shiftFocus={shiftFocus}/> : null}
      <div
        className={`${
          windowSize && windowSize > 500 ? "" : "w-full"
        } bg-white product-list-screen flex-wrap p-2 product-window-height overflow-auto`}
      >
        {filteredProductArr.map((product,i) => (
          <div key={product.id} >
            <ProductCard product={product} firstCardRef={i===0?firstCardRef:null} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
