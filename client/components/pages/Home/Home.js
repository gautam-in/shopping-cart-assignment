import React, { useEffect, useState } from "react";

import * as service from "./Home.service";

import "./Home.scss";

function Home() {
  const [productDetails, setProductDetails] = useState([]);
  const [displayProductList, setDisplayProductList] = useState([]);
  const [categoriesDetails, setCategoriesDetails] = useState([]);

  useEffect(() => {
    service
      .getProducts()
      .then((data) => {
        setProductDetails(data);

        filterProductsBasedOnCategory("5b6899953d1a866534f516e2", data);
      })
      .catch((err) => console.log("ERROR detected fetching products", err));

    service
      .getCategories()
      .then((data) => {
        //Filtering only enabled
        let temp = data.filter((category) => category.enabled);
        //Sorting based on order
        temp.sort((a, b) => a.order - b.order);
        setCategoriesDetails(temp);
      })
      .catch((err) => console.log("ERROR detected fetching categories", err));
  }, []);

  const filterProductsBasedOnCategory = (id, products) => {
    setDisplayProductList(() =>
      products.filter((product) => product.category === id)
    );
  };

  return (
    <div className="home_container">
      <div className="categories_dropdown_mobile">
        {categoriesDetails.map((category) => (
          <div
            key={category.id}
            onClick={() =>
              filterProductsBasedOnCategory(category.id, productDetails)
            }
          >
            {category.name}
          </div>
        ))}
      </div>
      <div className="products_list">
        {displayProductList.map(
          ({ id, name, description, imageURL, price, stock }) => (
            <div key={id} className="product">
              {name}
              <div className="flexed">
                <img src={imageURL} alt={name} width="40%" height="auto" />
                <section>
                  <div>{description}</div>
                  <span>Buy now @Rs.{price}</span>
                </section>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Home;
