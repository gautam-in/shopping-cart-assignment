import React, { useContext } from "react";
import { GlobalAppContext } from "../../Context/GlobalAppContext";

export default function Counter({ quantity, price, id, stock }) {
  const { dispatch } = useContext(GlobalAppContext);

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
      <button onClick={() => removeItem()} className={"counter-button"}>
        -
      </button>
      <p className="counter-text">{quantity}</p>
      <button
        onClick={() => editItem()}
        className={"counter-button"}
        disabled={stock === quantity}
      >
        +
      </button>
      <p className="counter-multiply">&#10005;</p>
      <p className="counter-text">{price}</p>
    </div>
  );
}
