import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import "../css/ProductList.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ProductList({ cartItemCouter }) {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [categoryId, setCategoryId] = useState(params.id);
  const [catProducts, setCatProducts] = useState([]);
  console.log(params);
  const navigate = useNavigate();

  console.log("categoryId", categoryId);

  const productCategoryIds = {
    fruits: "5b6899953d1a866534f516e2",
    bakery: "5b6899123d1a866534f516de",
    beverage: "5b675e5e5936635728f9fc30",
    beauty: "5b68994e3d1a866534f516df",
    baby: "5b6899683d1a866534f516e0",
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/products",
    })
      .then((res) => setProducts(res.data))

      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("effect");
    console.log(products);
    if (params.id == "all" && products.length) {
      setCatProducts(products);
    }
    if (products.length > 0 && categoryId !== "all") {
      getCatProducts();
    }
  }, [products.length, categoryId, params.id]);

  const getCatProducts = () => {
    const filteredData = products.filter(
      (product) => product.category == categoryId
    );
    setCatProducts(filteredData);
  };

  const categoryIdChangeHandler = (type) => {
    setCategoryId(productCategoryIds[type]);
    navigate(`/products/${productCategoryIds[type]}`);
  };

  return (
    <div className="product_list">
      <div className="product_list_left">
        <ul>
          <li onClick={() => categoryIdChangeHandler("fruits")}>
            Fruits and Vegetables
          </li>
          <li onClick={() => categoryIdChangeHandler("bakery")}>
            Bakery Cakes and Dairy
          </li>
          <li onClick={() => categoryIdChangeHandler("beverage")}>Beverages</li>
          <li onClick={() => categoryIdChangeHandler("beauty")}>
            Beauty and Hygiene
          </li>
          <li onClick={() => categoryIdChangeHandler("baby")}>Baby Care</li>
        </ul>
      </div>
      <div className="product_list_right">
        {catProducts.map((product, i) => (
          <Product
            product={product}
            key={product.id}
            cartItemCouter={cartItemCouter}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
