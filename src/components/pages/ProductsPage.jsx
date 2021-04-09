import React, { Component, useState } from 'react';
import { useHistory } from "react-router-dom";

import "../../styles/index.scss"

import * as Endpoints from "../Endpoints"
import Sidebar from "../Molecules/Sidebar"
import ProductsSection from "../Molecules/ProductsSection"

const ProductsPage = ({categories}) => {
  const [category, setCategory] = useState(null);
  const history = useHistory();
  const [productsList, setproductsList] = useState([]);

  React.useEffect(()=>{
    let axios = require("axios");
    let configurations = {
      method: "GET",
      url: Endpoints.get_products,
      headers: {}
    };

    axios(configurations)
    .then((res)=>{
      setproductsList(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })

    let locHash = history.location.hash;
    locHash = locHash.split("#");
    if(locHash[1]) {
      setCategory(locHash[1]);
      history.push("products");
      setCategory(locHash[1]);

    }
  },[]);

  return(
    <>
      <section className="product_sec">
            <div className="container">
                <Sidebar catgry={category} categories={categories} setCatgry={setCategory} />
                <ProductsSection pList={productsList} catgry={category} />
            </div>
      </section>
    </>
  )

}

export default ProductsPage;