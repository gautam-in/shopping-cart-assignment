import React, { useEffect, useState } from "react";
import { Wrapper } from "../../components";
import {
  FlexColumn,
  Sidebar,
  ProductsContainer,
  Product,
  List,
  ListItem,
  Title,
  Description,
  Price,
  Button,
  Section,
} from "./styled";
import axios from "axios";
import { useQuery } from "react-query";
import { fetchAPI, getBanners } from "../../services/ApiProvider";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/product.action";
import { useRouter } from "next/dist/client/router";

const BASE_URL = "http://localhost:5000";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("");
  const router = useRouter();
  console.log("Router", router);
  console.log("activeCategory", activeCategory);

  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProducts());
    console.log("activeCategory", activeCategory);
  }, []);

  const buyNow = (product) => {
    let productObj = {
      name: product.name,
      price: product.price,
      id: product.id,
      image: product.imageURL,
      qty: 1,
    };
    dispatch(addToCart(productObj));
  };

  return (
    <FlexColumn>
      <Sidebar>
        <List onClick={(e) => setActiveCategory(e.target.value)}>
          <ListItem>Fruits & Vegetables</ListItem>
          <ListItem>Bakery Cakes and Dairy</ListItem>
          <ListItem>Beverages</ListItem>
          <ListItem>Beauty and Hygiene</ListItem>
          <ListItem>Baby Care</ListItem>
        </List>
      </Sidebar>
      <ProductsContainer>
        {productsData?.products?.map((product, index) => (
          <Product key={index}>
            <Title>{product.name}</Title>
            <img width="100%" src={product.imageURL} alt="" />
            <Description>{product.description}</Description>
            <Section>
              <Price>MRP Rs.{product.price}</Price>
              <Button onClick={() => buyNow(product)}>Buy Now</Button>
            </Section>
          </Product>
        ))}
      </ProductsContainer>
    </FlexColumn>
  );
}

// const [products, setProducts] = useState([]);
// const { isLoading, error, data } = useQuery('products', () =>
//   axios(`${BASE_URL}/products`));
// console.log("productsData",data);
