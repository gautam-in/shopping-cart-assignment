import React, { useEffect, useState } from "react";
import classes from "./products.module.scss";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../api/products";
import ProductCard from "../../components/ProductCard";
import ProductCategories from "../../components/ProductCategories";

function Products() {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = "Explore products for everyone | Sabka Bazaar";
    const controller = new AbortController();

    fetchProducts(params.category, { signal: controller.signal }).then(
      (products) => setProducts(products)
    );

    return () => controller.abort();
  }, [params.category]);

  return (
    <section className={classes.container}>
      <ProductCategories />
      <section className={classes.products}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </section>
  );
}

export default Products;
