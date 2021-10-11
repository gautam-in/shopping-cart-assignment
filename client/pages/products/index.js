import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCardStyle from '../../components/styles/ProductCardStyle';
import FlexRowStyle from '../../components/styles/FlexRowStyle';
import { Product } from '../../components/Product';
import Head from 'next/head';
export default function ProductsPage() {
const [productList, setProductList] = useState([])

useEffect(() => {
  axios.get("http://localhost:5000/products")
  .then((response) => {
    setProductList(response.data)
  })
  .catch(err => console.error(err));
}, [])
    return (
      <>
        <FlexRowStyle>
        <Head>
             <title>Sabka Bazar - Products</title>
        </Head>
          {productList && productList.map(item => {
             return <Product  key={item.id} item={item} />
          } )}        
        </FlexRowStyle>
      </>  
    )
}