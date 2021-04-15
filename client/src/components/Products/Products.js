import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { handleCart } from "../../store/actions/action";
import instance from "../../axios-instance";
import { useHistory } from "react-router-dom";
import Product from "../Product/Product";

const Products = ({ categories }) => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const history = useHistory();
  const [products, setProduct] = useState([]);
  
  React.useEffect(() => {
    let isMounted = true;
    instance
      .get("/products")
      .then((response) => {
        if(isMounted){
          setProduct(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    let hash = history.location.hash;
    hash = hash.split("#");
    if (hash[1]) {
      onFilter(hash[1]);
      history.push("products");
      setSelectedCategory(hash[1]);
    }
    return () => { isMounted = false }; 
  }, [history]);

  const onFilter = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (product) => {
    instance
      .post("/addToCart")
      .then((response) => {
        const { data } = response;
        if (data) {
          dispatch(handleCart(product));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="products-container">
      <Sidebar
        categories={categories}
        filter={onFilter}
        selectedcategory={selectedCategory}
      />

      <div className="products">
        {products &&
          products.length > 0 &&
          products
            .filter((item) =>
              selectedCategory ? item.category === selectedCategory : true
            )
            .map((product) => (
              <Product
                product={product}
                key={product.id}
                handlecart={(product) => addToCart(product)}
              />
            ))}
      </div>
    </div>
  );
};

export default Products;
