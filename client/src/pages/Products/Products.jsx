import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Menubar from "../../components/Menubar/Menubar";
import Productitems from "../../components/ProductItems/ProductItems";
import classes from "./Products.module.css";

const Products = () => {
  const [fetchProducts, setFetchProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const history = useHistory();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const productId = searchParams.get("product");

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setFetchProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    setAllProducts(() => {
      if (productId === null) {
        return fetchProducts;
      } else {
        return fetchProducts.filter(
          (current) => current.category === productId
        );
      }
    });
  }, [productId, fetchProducts]);

  const handleClick = (id) => {
    history.push(`/products?product=${id}`);
  };

  return (
    <div className={classes.product__container}>
      <Menubar handleClick={handleClick} categories={categories} />
      <Productitems products={allProducts} />
    </div>
  );
};

export default Products;
