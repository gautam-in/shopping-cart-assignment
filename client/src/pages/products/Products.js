import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../../components/product/Product";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import './products.css'
const Products = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/categories").then((res) => {
      return setCategories(res.data);
    });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) =>{
        let data = res.data
        if(params.id){
            let filtered= data.filter((item)=>item.category === params.id)
            data= filtered
        }
        setProducts(data)
      });
  }, [params]);
  console.log(products);

  return (
    <section className="productsContainer">
    <div className="filterContainer">
    </div>
      <nav className="sidebarConainer">
        <Sidebar />
      </nav>
      <div className="cardsContainer">
        {products.map((item) => (
          <Product
            pname={item.name}
            imageURL={item.imageURL}
            description={item.description}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </section>
  );
};
export default Products;
