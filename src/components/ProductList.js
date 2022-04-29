import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductListNav from "./ProductListNav.js"
import ProductDetails from "./ProductDetails.js"
import "./ProductList.css";

export default function ProductList(props) {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  useEffect(()=>{
    const { REACT_APP_CATEGORIES_URL = 'http://localhost:5000/categories' } = process.env;
    axios.get(REACT_APP_CATEGORIES_URL).then(response => {
      let { data } = response;
      data = data.sort(function(a, b) {
        return a.order - b.order;
      });
      data = data.filter(element => element.enabled);
      if (props.category) {
        const categoryObj = data.find((element) => element.name.toLowerCase().replaceAll(" ", '-') === props.category);
        if (categoryObj) setCategoryId(categoryObj.id);
      }
      setCategories(data);
    }).catch(error => console.error(error));
  },[props.category])
  const{id}=categories;
  return (
    <>
    
    <div className='product-list container'>
        <div className='row'>
            <div className='col-md-3 col-12 product-list-nav'>
            <ProductListNav categories={categories} />
            </div>
            <div className='col-md-9 col-12'>
            <ProductDetails handleCartItem={props.handleCartItem} categoryId={categoryId} />
            </div>
        </div>
    </div>
    
   
    
    </>
  );
}
