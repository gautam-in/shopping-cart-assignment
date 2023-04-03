import { useContext } from "react";
import "../assets/styles/components/CardProducts.scss";
import { CartContext } from "../context";

const CardProducts = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card-products" key={product.id}>
      <h2 className="title">{product.name}</h2>

      <div className="wrapper-product">
        <div className="product-image">
          <img src={product.imageURL} alt={product.name} />
        </div>

        <div className="product-description">
          <p>{product.description}</p>
        </div>

        <div className="product-price">MRP Rs.{product.price}</div>

        <div className="product-buy-now">
          <button onClick={() => addToCart(product)}>
            Buy Now <span>@ MRP Rs.{product.price}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
