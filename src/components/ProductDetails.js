import React,{useState,useEffect} from 'react';
import axios from 'axios';


function ProductDetails({ handleCartItem, categoryId = null }) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const { REACT_APP_PRODUCTS_URL = 'http://localhost:5000/products' } = process.env;
        axios.get(REACT_APP_PRODUCTS_URL).then(response => {
          if(categoryId) {
            const products = response.data.filter(element => element.category === categoryId);
            setProducts(products);
          } else {
            setProducts(response.data);
          }
        }).catch(error => console.error(error));
      }, [categoryId]);
      
    if (products.length === 0) return null;

    const addToCart = (product) => {
        
        const existingCart = localStorage.getItem('cart')?(JSON.parse(localStorage.getItem('cart'))):[];
        const productIndex = existingCart?.findIndex(prod => prod.id === product.id);
        if (productIndex > -1) {
          existingCart[productIndex].qty = existingCart[productIndex].qty + 1;
        } else {
          product.qty = 1;
          existingCart.push(product);
        }
        localStorage.setItem('cart', JSON.stringify(existingCart));
        handleCartItem(existingCart.length)
      };
 
  return (
    <>
        <div className='row'>
            {products.map((product,index)=>{
                //const { name, imageURL, description, price, id } = product;
                return (<div key={index} className='product-box-content col-md-3 col-12'>
                <h3>{product.name}</h3>
                <img
                  src={product.imageURL}
                  alt={product.name}
                />
                <p>{product.description}</p>
                <div className='price-section'>
                    <span className="fw-b d-none d-md-block">MRP Rs.{product.price}</span>
                    <button onClick={() => addToCart(product)}>Buy Now</button>
                </div>
                </div>)
            })}
            
        </div>
        

    </>
    );
}

export default ProductDetails;
