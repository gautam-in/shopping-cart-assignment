import React, { useState } from 'react';

import {useParams} from "react-router-dom";
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import ProductList from '../components/ProductList.js';

export default function Products(props) {
  const params = useParams();
  return (
    <>
    <Header ItemCount={props.ItemCount}/>
    <ProductList handleCartItem={props.handleCartItem} category={params.category} />
    <Footer/>
    </>
  );
}
