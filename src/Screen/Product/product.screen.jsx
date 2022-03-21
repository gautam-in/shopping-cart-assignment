import React, { useEffect } from "react";
import NavigationBar from "../../Component/Navigation/navigation.component";
import ProductCard from "../../Component/ProductCard/productcard.component";
import "./product.styles.scss";

function Product(props) {
  const { setCategoryId, addItemsToCart, match, filteredList, getProductList } =
    props;

  const setCategory = (id, e) => {
    setCategoryId(id);
  };

  const addItemToCart = (product) => {
    product.quantity = 1;
    addItemsToCart(product);
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className="product-container">
      <NavigationBar category={setCategory} match={match} />
      <div className="product-card">
        {filteredList &&
          filteredList.map((pro) => (
            <ProductCard
              key={pro.id}
              name={pro.name}
              imgURL={pro.imageURL}
              price={pro.price}
              desc={pro.description}
              additem={() => addItemToCart(pro)}
            />
          ))}
      </div>
    </div>
  );
}

export default Product;
