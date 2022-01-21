import { useContext } from "react";
import CartContext from "../../Context/CartContext/CartContext";
import useMediaQuery from "../../util/Customhook/useMediaQuery";
import Button from "../UI Components/Button/Button";
import Image from "../UI Components/Image/Image";
import "./ProductCard.scss";

const ProductCard = ({ name, imageUrl, price, stock, text, id }) => {
  const match = useMediaQuery("(min-width: 768px)");
  const {
    dispatch,
    cart: { products },
  } = useContext(CartContext);

  const addItemToCart = () => {
    console.log("1");
    if (!products[id]) {
      dispatch({
        type: "ADD_ITEM",
        product: {
          [id]: {
            id,
            imageUrl,
            name,
            price,
            stock,
            quantity: 1,
          },
        },
      });
    } else {
      dispatch({
        type: "EDIT_ITEM",
        id: id,
      });
    }
  };
  return (
    <section className="card-container">
      <h2 className="card-container__title">{name}</h2>
      <div className="card-container__image">
        <Image
          source={imageUrl}
          alt={"product image"}
          className={"product-image"}
        />
      </div>
      <p className="card-container__description">{text}</p>
      <section className="card-container__button">
        {match ? (
          <>
            <p className="card-container__button__price">MRP Rs.{price}</p>
            <Button
              onClick={() => addItemToCart()}
              className={"card-container__button__buy-button"}
            >
              Buy Now
            </Button>
          </>
        ) : (
          <Button
            onClick={() => addItemToCart()}
            className={"card-container__button__buy-button"}
          >
            Buy Now @ Rs.{price}
          </Button>
        )}
      </section>
    </section>
  );
};

export default ProductCard;
