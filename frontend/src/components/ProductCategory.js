import {
  AllProductsStyles,
  SideNavStyles,
  ProductsSectionStyles,
} from "./styles/allproducts";
import { useParams } from "react-router";
import { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import SideNav from "./SideNav";
import { CartContext } from "../store/cart-context";
import Product from "./Product";

export default function Category(props) {
  const [category, setCategory] = useState([]);
  const [categoryLinks, setCategoryLinks] = useState([]);
  const params = useParams();
  const { catId } = params;

  const ctx = useContext(CartContext);

  const LoadProducts = useCallback(() => {
    axios.get("http://localhost:8888/products")
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('Something went wrong in products')
        }
        const carlist = new Set();
        res.data.map((item) => carlist.add(item.category));
        setCategoryLinks((prev) => [...carlist]);
        if (catId) {
          setCategory(filterhandler(catId, res.data));
        } else setCategory(res.data);
      }).catch(error => {
        console.log(error);
      })

  }, [catId]);

  useEffect(() => {
    LoadProducts();

  }, [LoadProducts]);

  const filterhandler = (catId, data) => {
    let filteredCategory = data;
    filteredCategory = data?.filter((item) => item.category === catId);
    return filteredCategory;
  };

  const addToCartHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  return (
    <AllProductsStyles>
      <SideNavStyles>
        <SideNav categoryLinks={categoryLinks} />
      </SideNavStyles>
      <ProductsSectionStyles>
        {category?.map((item) => (
          <Product key={item.id} item={item} onAdd={addToCartHandler} />
        ))}
      </ProductsSectionStyles>
    </AllProductsStyles>
  );
}
