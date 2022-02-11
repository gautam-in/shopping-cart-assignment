import React, {useReducer, useContext, useState, Component} from 'react';
import ProductNav from './ProductNav';
import { AppContext } from '../common/AppContext';
import APICalls from '../../dataControls/APICalls';
import './Products.scss';
import { useEffect } from 'react';
import axios from 'axios';


const API_URL = "http://localhost:5000/";

const Products  = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryId, setCategoryId] = useState([]);

  const getProductsData = async () => {
    await axios(API_URL + "products").then(res => {
      setItems(res.data);
      setLoading(false);
    });
  }

  useEffect(()=> {
    getProductsData();
  }, [])
  
  const addProdToCart = (item)=>{
    let products={};
    if(props.products[Object.keys(item)[0]]){
      products = props.products
      products[Object.keys(item)[0]].qty = products[Object.keys(item)[0]].qty + 1;
    }
    else{
      products = props.products
      products = {...products,...item}
  
    }
    props.addToCart(products);
  }
  
  const addProducts = (item, e)=>{
    e.preventDefault();
    let products = {};
    products[item.name]= {};
    products[item.name]["qty"] =  1;
    products[item.name]["price"] = item.price;
    products[item.name]["imageURL"]= item.imageURL;

    return fetch(API_URL + "addToCart",{
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({id:item.id})
      }).then((data)=>{
         return data.json();
      }).then((res)=>{
            if(res.response==="Success"){
              addProdToCart(products)
            }
      });
}

    return(      
      <div className="Products">
        <nav className='products-nav'>
          <ProductNav set_id = {setCategoryId}/>
        </nav>
        <article className="products">
          <ul className="products-items">
            {
              items.length > 0 &&
              categoryId.length === 0 &&
              items.map(item => {
                return(
                  <li className='item-product' key={item.id}>
                    <h1>{item.name}</h1>
                    <img src={process.env.PUBLIC_URL + item.imageURL} alt="product" />
                    <p>{item.description}</p>
                    <div className="price">
                      <span className='mrp'>MRP Rs {item.price}</span>
                      <button>
                        <span className='btn-buynow' onClick={e => addProducts(item, e)}>Buy Now</span>
                        <span className='button-text'>@ Rps {item.price}</span>
                      </button>
                    </div>
                  </li>
                )
              })
            }
            {
              items.length > 0 &&
              categoryId !== [] &&
              items.map((item) => {
                if (item.category === categoryId) {
                  return (
                    
                    <li className='item-product' key={item.id}>
                      <h1>{item.name}</h1>
                      <img src={process.env.PUBLIC_URL + item.imageURL} alt="product" />
                      <p>{item.description}</p>
                      <div className="price">
                        <span className='mrp'>MRP Rs {item.price}</span>
                        <button>
                          <span className='btn-buynow' onClick={e => addProducts(item, e)}>Buy Now</span>
                          <span className='button-text'>@ Rps {item.price}</span>
                        </button>
                      </div>
                    </li>
                  );
                } else return null;
              })
            }
          </ul>
        </article>
      </div>
    )
}

export default Products;