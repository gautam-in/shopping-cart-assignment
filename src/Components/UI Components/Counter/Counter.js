import { useContext } from "react";
import CartContext from "../../../Context/CartContext/CartContext";
import Button from "../Button/Button";
import "./Counter.scss";

const Counter = ({ id, price, quantity, stock }) => {
  const { dispatch } = useContext(CartContext);

  const editItem = () => {
    dispatch({
      type: "EDIT_ITEM",
      id: id,
    });
  };

  const removeItem = () => {
    dispatch({
      type: "REMOVE_ITEM",
      id: id,
    });
  };
  return (
    <div className="counter">
      <Button onClick={() => removeItem()} className={"counter__button"}>
        -
      </Button>
      <p className="counter__text">{quantity}</p>
      <Button
        onClick={() => editItem()}
        className={"counter__button"}
        disabled={stock === quantity}
      >
        +
      </Button>
      <p className="counter__multiply">&#10005;</p>
      <p className="counter__text">{price}</p>
    </div>
  );
};

export default Counter;
