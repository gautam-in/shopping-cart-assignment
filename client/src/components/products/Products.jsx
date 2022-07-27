import { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import "./products.css";
import axios from "axios";
import { ShopContext } from "../../contexts/shoppingContext";

const Products = () => {
  const { addItemToCart } = useContext(ShopContext);
  const [productLists, setProductLists] = useState([]);
  const categoryList = ["bakery", "beverage", "fruits", "beauty", "babycare"];
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
  const searchProducts = () => {
    console.log("when category is clicked");
  };
  const handleItemToCart = (product) => {
    addItemToCart(product);
  };
  return (
    <div className="products-container">
      <div className="product-types">
        {categoryList.map((item) => {
          return (
            <div className="product-sidebar" onClick={searchProducts}>
              {item}
            </div>
          );
        })}
      </div>
      <div className="products-lists">
        {productLists.map((product) => {
          return (
            <div className="product-container" key={product.id}>
              <h6>
                <strong>{product.name}</strong>
              </h6>
              <img
                src={product.imageURL}
                alt={product.name}
                style={{ margin: "10px" }}
              />
              <p>{product.description.substring(0, 50)}</p>
              <div className="product-price">
                <div>MRP Rs.{product.price}</div>
                <Button
                  className="buyItem"
                  onClick={() => addItemToCart(product)}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
