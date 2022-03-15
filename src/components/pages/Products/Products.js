import React from "react";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import useProducts from "../../../utils/useProducts";
import Dropdown from "../../molecules/Dropdown/Dropdown";
import Sidebar from "../../molecules/Sidebar/Sidebar";
import Card from "../../organisms/Card/Card";
import "./Products.scss";

export default function Products() {
  const { filteredCategory, filteredProduct, handleProduct } = useProducts();

  const browserWidth = useMediaQuery("(max-width: 480px)");

  return (
    <main className="product-container">
      {browserWidth ? (
        <Dropdown
          items={[...filteredCategory, { id: "", name: "All Products" }]}
          handleProduct={handleProduct}
          filteredProduct={filteredProduct}
        />
      ) : (
        <Sidebar
          filteredCategory={filteredCategory}
          handleProduct={handleProduct}
        />
      )}
      <main className="product-container__card">
        {filteredProduct.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            imageUrl={product.imageURL}
            name={product.name}
            price={product.price}
            stock={product.stock}
            text={product.description}
          />
        ))}
      </main>
    </main>
  );
}
