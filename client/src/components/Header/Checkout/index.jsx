
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledCheckout, StyledCheckoutArrow } from './Checkout.styled';

import Button from '../../Utilities/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentState, emptyCart } from '../../../redux/slices/cart';
import { useNavigate } from 'react-router-dom';
import { getSessionCartData } from '../../../services/getFormattedDataServices';
import useOverflowHidden from '../../../hooks/useOverflowHidden';

const Checkout = ({ cartPrice }) => {

  const happyShopping = () => toast('Happy Shopping !',{position: "top-center"});
  const kindlyLogin = () => toast('kindly Login first to buy products !',{position: "top-center"});
  const isCartOpen = useSelector((state) => state.cart.isOpen);
  const cartData = useSelector((state) => state.cart.products);
  const {overflowHidden,toggleOverflowHide} = useOverflowHidden();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkoutHandler = () => {
    if(sessionStorage.length > 0) {
      const user = JSON.parse(sessionStorage.getItem('userData'))?.[0];
      if(user) {
        happyShopping();
        const cartSessionData = getSessionCartData(cartData);
        sessionStorage.setItem('cartData',JSON.stringify(cartSessionData));
        dispatch(emptyCart());
        dispatch(currentState(!isCartOpen));    
        toggleOverflowHide(!overflowHidden);
        setTimeout(() => {
          navigate('/',{replace:true});
        }, 3000);
      } else {
        kindlyLogin();
        dispatch(currentState(!isCartOpen));    
        toggleOverflowHide(!overflowHidden);
        setTimeout(() => {
          navigate('/form/sign-in',{replace:true});
        }, 3000);
      }
    }
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
