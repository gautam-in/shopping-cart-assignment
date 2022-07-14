import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./products.css";
import axios from "axios";

const Products = () => {
  const [productLists, setProductLists] = useState([]);
  const loadProductsInfo = async () => {
    await axios
      .get("http://localhost:5000/products")
      .then(({ data }) => {
        console.log("products information", data);
        if (data) {
          setProductLists(data);
        }
      })
      .catch((error) => {
        console.log("Error in getting Products information", error);
      });
  };
  useEffect(() => {
    loadProductsInfo();
  }, []);
  return (
    <div className="products-container">
      <div className="product-types">
        <ul>
          <li>bakery</li>
          <li>beverage</li>
          <li>fruits</li>
          <li>beauty</li>
          <li>babycare</li>
        </ul>
      </div>
      <div className="products-lists">
        {productLists.map(({ id, name, description, imageURL, price }) => {
          return (
            <div className="product-container" key={id}>
              <h6>
                <strong>{name}</strong>
              </h6>
              <img src={imageURL} alt={name} style={{ margin: "10px" }} />
              <p>{description.substring(0, 50)}</p>
              <div className="product-price">
                <div>MRP Rs.{price}</div>
                <Button className="buyItem">Buy Now</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
