import React from "react";
import Modal from "react-modal";
import Header from "../../components/header"
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { addQuantity, reduceQuantity, removeProduct } from "../../action";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Checkout = styled.footer`
  background-color: white;
  p {
    font-size: 18px;
    font-weight: bold;
    padding: 20px;
    text-align: center;
  }
  button {
    width: 100%;
  }
`;

const Cart = ({ open, openModal, closeModal }) => {
  let result = [];
  const dispatch = useDispatch();
  const state = useSelector((state) => state.updateCart);

  function reduceQuantityHandler(product) {
    if (product.quantity === 1) dispatch(removeProduct(product));
    else {
      dispatch(reduceQuantity(product));
    }
  }

  function checkout(){
     closeModal()  //close the cart modal
  }
  //Style each item in cart
  if (state.cart && state.cart.length > 0) {
    result = state.cart.map((product) => {
      return (
        <section>
          <img class="item-img" src={product.imageURL} alt="Grocery Item" />
          <div class="item-desc">
            <p>{product.name}</p>
            <div class="update-quantity">
              <button onClick={() => reduceQuantityHandler(product)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => dispatch(addQuantity(product))}>+</button>
              <p>x {product.price}</p>
            </div>
          </div>
          <p class="total-price">Rs {product.quantity * product.price}</p>
        </section>
      );
    });
  }
  return (
    <div>
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <>
          <article class="cart-container">
            <Header isNav={false}/>
            <p class="cart-title">My Cart</p>
            {result}
            <aside class="cart-adv">
              <img src={"/images/lowest-price.png"} alt="seurity" />
              <p>You won't find it cheaper anywhere</p>
            </aside>
            <Checkout>
              <p>Promo Code will be applied on Payment Screen </p>
              <button onClick={checkout}>Proceed to checkout</button>
            </Checkout>
          </article>
        </>
      </Modal>
    </div>
  );
};

export default Cart;
