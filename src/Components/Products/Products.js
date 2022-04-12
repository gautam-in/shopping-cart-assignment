import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import Button from "../../Shared/Button";
import { productsURL, categoryURL } from "../../Shared/URL";
import "./Product.scss";

function Products(props) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [cart,setCart]=useState([])
  const navigate=useNavigate();
  const location = useLocation();
  // console.log()
  // const allCategories = products.map((item) => item.category);

 

  
  useEffect(() => {
    getProducts();
    getCategories();
    // if (location.state != null) {
    //   getProductsByCategory(location.state.categoryId);
    // }
  }, []);

  const getProducts = () => {
    axios
      .get(productsURL)
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(location.state === null ? response.data 
          : response.data.filter((product) => product.category === location.state.categoryId) );
             
        // if (location.state != null) {
        //   getProductsByCategory(location.state.categoryId);
        // }
        // getProductsByCategory(location.state?.categoryId);
      })
      .catch((error) => console.log(error));
  };

  const getCategories = () => {
    axios
      .get(categoryURL)
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => console.log(error));
  };

  const getProductsByCategory = (id) => {
    const newList = products.filter((product) => product.category === id);
    console.log(newList);
    setFilteredProducts(newList);
  };

  const addToCart=(id)=>{
    let tempcart=[...cart]
    console.log("buttonclicked");
    navigate('/cart');
  }

  return (
    <main className="products-container">
      <div className="sidebar">
        {categories.map((category) => {
          return (
            <div className="sidebar-main">
            <a onClick={() => getProductsByCategory(category.id)}>
              {category.name}
            </a>
            </div>
          );
        })}
      </div>
      <div className="products-wrapper">
        {filteredProducts.map((product) => {
          return (
            <div className="product-container">
              <h2>{product.name}</h2>
              <img
                src={product.imageURL}
                alt={product.name}
                className="product-image"
              />
              <div className="product-description">
                <p>{product.description}</p>
                </div>
                <div className="product-btn">
                <p>MRP Rs. {product.price}</p>
                <Button onClick={()=>addToCart(product.id)}>Buy Now </Button>
                </div>
                
              
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Products;
