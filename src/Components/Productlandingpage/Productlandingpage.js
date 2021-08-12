import React, { useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/Products/productsaction";
import { fetchCategories } from "../../redux/Categories/categoriesactions";
import "./Productlandingpage.scss";
export default function Productlandingpage() {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.products);
  const categoriesData = useSelector((state) => state.categories);
  const [currentproducts, setcurrentproducts] = useState([]);
  const [rerender, setrerender] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);

  const eventhandler = (data) => {
    const filtereddata = data
      ? productsData.products.filter((item) => item.category == data)
      : productsData.products;
    console.log(filtereddata, "filtereddata");
    setcurrentproducts(filtereddata);
    setrerender(true);
  };
  return (
    <div className="productlandingpage">
      <Menu
        categories={categoriesData.categories}
        className="selectionbar"
        eventhandler={eventhandler}
      />
      {!rerender && <Products products={productsData.products} />}
      {rerender && <Products products={currentproducts} />}
    </div>
  );
}
