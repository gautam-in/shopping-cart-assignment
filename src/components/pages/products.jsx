import React from "react";
import { useSelector } from "react-redux";
import { CategoriesData } from '../../server/categories';
import { ProductData } from '../../server/products';
import ProductList from "../Products/product-list.component";
import ProductCard from '../Products/product-card.component';

function Product() {
  const { filter } = useSelector((state) => state);
  return (
    <main
      className="product container"
      id="products-list-container"
      role="main"
    >
      <ProductList category={CategoriesData} />
      <section
        id="products-cards-container"
        className="product-cards-container"
      >
        <ul
          className="product-list"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            padding: 0,
            margin: 0,
            listStyle: "none",
          }}
          role="list"
        >
          {filter == null &&
            ProductData.length > 0 &&
            ProductData.map((item) => <ProductCard product={item} key={item.id} />)}
          {filter != null &&
            ProductData.length > 0 &&
            ProductData.map((item) =>
              item.category === filter ? (
                <ProductCard product={item} key={item.id} />
              ) : null
            )}
        </ul>
      </section>
    </main>
  );
}

export default Product;