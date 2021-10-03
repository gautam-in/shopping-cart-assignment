import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../action";

const ProductList = ({ categoryId }) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  let renderProducts = null;
  useEffect(() => {
    const getProductsByCategoryId = async () => {
      let url = "http://localhost:3000/products"
      if(categoryId)url= "http://localhost:3000/products?category=" + categoryId
      const data = await fetch(url);
      const productData = await data.json();
      if (productData && productData.length > 0) {
        setProducts(productData);
      }
    };
    getProductsByCategoryId();
  }, [categoryId]);

  if (products && products.length > 0) {
    renderProducts = products.map((product) => {
      return (
        <div key={product.id} className="card">
          <h3>{product.name}</h3>
          <div className="prod-desc">
            <img src={product.imageURL} alt={product.name} />
            <p>{product.description}</p>
          </div>
          <button
            onClick={() => dispatch(addProduct(product))}
            className="prod-btn"
          >
            Buy Now @{product.price}
          </button>
        </div>
      );
    });
  }
  return <article className="products">{renderProducts}</article>;
};
export default ProductList;
