import "./abc.scss";
import categoriesInfo from "./data.json";
import productList from "./products.json";

import { Header } from "../../container";
import { Button } from "../../components";

const ProductListing = () => {
  const products = productList.map((product) => (
    <div className="product" key={product.id}>
      <h3>{product.name}</h3>
      <img src={product.imageURL} alt={product.name} />
      <p className="description">{product.description}</p>
      <div className="price">
        <p>MRP Rs. {product.price}</p>
        <Button onClickHandler={() => {}}>Buy Now</Button>
      </div>
    </div>
  ));
  return (
    <div>
      <Header />
      <div className="product-listing-page">
        <div className="categories-list">
          <ul>
            {categoriesInfo
              .sort((a, b) => a.order - b.order)
              .map((category) => {
                if (category.order < 0) return null;
                return (
                  <li key={category.key} onClick={() => {}}>
                    {category.name}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="products">{products}</div>
      </div>
    </div>
  );
};

export default ProductListing;
