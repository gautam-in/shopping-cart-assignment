
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledCheckout, StyledCheckoutArrow } from './Checkout.styled';

import Button from '../../Utilities/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentState, emptyCart } from '../../../redux/slices/cart';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartPrice }) => {

  const happyShopping = () => toast('Happy Shopping !',{
    position: "top-center",
  });
  const isCartOpen = useSelector((state) => state.cart.isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkoutHandler = () => {
    happyShopping();
    dispatch(emptyCart());
    dispatch(currentState(!isCartOpen));

    setTimeout(() => {
      navigate('/',{replace:true});
    }, 3000);
  }

  return (
    <StyledCheckout className="checkout">
      <Button styleClass="checkout-btn" onClick={checkoutHandler}>
        <p>Proceed to checkout</p>
        <span>
          Rs.{cartPrice}
          <StyledCheckoutArrow>&#62;</StyledCheckoutArrow>
        </span>
      </Button>
      <ToastContainer
        position="bottom-right"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </StyledCheckout>
  );
};

export default Checkout;
