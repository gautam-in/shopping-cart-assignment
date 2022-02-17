import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { editItem, removeItem } from "../../../store/cartReducer/cartActions";
import classes from "./Counter.module.css";

const Counter = ({ id, price, quantity, stock }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.counter}>
      <Button
        onClick={() => dispatch(removeItem(id))}
        className={classes.counter__button}
      >
        -
      </Button>
      <p className={classes.counter__text}>{quantity}</p>
      <Button
        onClick={() => dispatch(editItem(id))}
        className={classes.counter__button}
        disabled={stock === quantity}
      >
        +
      </Button>
      <p className={classes.counter__multiply}>&#10005;</p>
      <p className={classes.counter__text}>{price}</p>
    </div>
  );
};

export default Counter;
