import { useEffect, memo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCategories } from "store/home/homeSlice";
import { getProducts } from "store/product/productSlice";

import Sidebar from "components/Product/Sidebar";
import MobileCategory from "components/Product/MobileCategory";
import ProductView from "components/Product/ProductView";
import { Container } from "./Product.styles";

const Product = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const [filProducts, setFilProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  // fetch categories and products
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  // filter products when category is selected
  useEffect(() => {
    if (activeCategory != "") {
      let temp = [];
      temp = products.filter((item) => item.category === activeCategory);
      setFilProducts(temp);
    } else {
      setFilProducts(products);
    }
  }, [products, activeCategory]);

  const changeCategory = (id) => {
    if (id === activeCategory) {
      setActiveCategory("");
      return;
    }
    setActiveCategory(id);
  };

  return (
    <Container>
      <Sidebar active={activeCategory} changeFilter={changeCategory} />
      <MobileCategory active={activeCategory} changeFilter={changeCategory} />
      <ProductView product={filProducts} />
    </Container>
  );
};

export default memo(Product);
