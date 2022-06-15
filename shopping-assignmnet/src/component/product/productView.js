/* eslint-disable no-console */
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SabkaBazarContext } from "../../store/context";
import Aside from "../common/view/aside";
import { Footer } from "../common/view/footer";
import Header from "../common/view/header";

const ProductView = () => {
  const params = useParams();
  const [allProd, setAllProd] = useState([]);
  const [cateogories, setCategories] = useState([]);
  const { addToCart, addProducts } = React.useContext(SabkaBazarContext);
  /* Fetch categories */

  const getCategories = useCallback(async () => {
    const res = await fetch("http://localhost:3000/categories");
    const categories = await res.json();
    setCategories(categories);
  }, []);

  /* Fetch app products */
  const getAllProducts = useCallback(async () => {
    const res = await fetch("http://localhost:3000/products");
    let products = await res.json();
    if (params.id) {
      const filteredProducts = products.filter(
        (product) => product.category === params.id
      );
      setAllProd(filteredProducts);
    } else {
      addProducts(products);
      setAllProd(products);
    }
  }, [params]);
  useEffect(() => {
    getCategories();
    getAllProducts();
  }, [params]);

  const addItemToCart = (id) => {
    addToCart(id);
  };
  return (
    <React.Fragment>
      <Header />
      <Aside categories={cateogories} />
      <main>
        <section className="products">
          {allProd.length
            ? allProd.map((singleProducts) => (
                <div open className="products__item" key={singleProducts.id}>
                  <h2>{singleProducts.name}</h2>
                  <img
                    // eslint-disable-next-line no-undef
                    src={process.env.PUBLIC_URL + singleProducts.imageURL}
                    alt={singleProducts.name}
                  />
                  <p>{singleProducts.description}</p>
                  <span>MRP Rs.{singleProducts.price}</span>
                  <button onClick={() => addItemToCart(singleProducts.id)}>
                    Buy Now
                  </button>
                </div>
              ))
            : "No Products.."}
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default ProductView;
