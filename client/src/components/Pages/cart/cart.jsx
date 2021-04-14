import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cart.scss";
import { handlecartupdate } from "../../../Redux/action";
import { useHistory } from "react-router-dom";
import NonEmptyCart from '../../UI/molecules/cart/NonEmptyCart';
import EmptyCart from '../../UI/molecules/cart/EmptyCart';

function Cart({ setCart }) {
  const cart = useSelector((store) => store.cart);
  const ref = React.useRef();
  const dispatch = useDispatch();
  const [confirm, setConfrm] = useState(false);

  const history = useHistory();

  function close(e) {
    e.stopPropagation();
    setCart(false);
  }

  function confirmOrder() {
    setConfrm(true);
    setTimeout(() => {
      setConfrm(false);
      setCart(false);
      dispatch(handlecartupdate());
      history.push("home");
    }, 1000);
  }

  function startShopping(){
    setTimeout(() => {
      setConfrm(false);
      setCart(false);
      dispatch(handlecartupdate());
      history.push("home");
    }, 500);
  }

  function price() {
    let p = 0;
    for (let item of cart) {
      p = item.price * item.qty + p;
    }
    return p;
  }

  React.useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div onClick={close} className="container">
      {confirm && (
        <div className={"dialog"}>
          <div>
            <h2>Thank you for shopping !!!</h2>
          </div>
        </div>
      )}
      <div onClick={(e) => e.stopPropagation()} className="cart">
        <header>
          <span> My Cart({cart.length})</span>
          <button ref={ref} className={"cross"} onClick={close}>
            x
          </button>{" "}
        </header>
        {cart.length ? (
          <NonEmptyCart cart ={cart} confirmOrder ={confirmOrder} price ={price}/>
        ) : (
          <EmptyCart startShopping ={startShopping}/>
        )}
      </div>
    </div>
  );
}

export default Cart;
