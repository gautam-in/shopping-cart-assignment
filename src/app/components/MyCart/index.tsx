/**
 *
 *
 *
 */

import React, { memo } from 'react';
import { useSelector } from "react-redux";

import { CartItem } from 'app/components/CartItem';
import { EmptyCart } from 'app/components/EmptyCart';
import { MyCartStyle } from 'styles/mycart-styles';

import get from 'lodash/get';

import { selectMyCart } from './selectors';

interface Props {
  actions: {
    setOpen: Function;
  };
  open: boolean;
}

export const MyCart = memo((props: Props) => {
  const cart = useSelector(selectMyCart);
  const { setOpen } = props.actions;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="cart">
      <MyCartStyle />
      <header>
        <div className="cart-heading">
          My Cart ({get(cart, 'length', 0)} Items)
        </div>
        <span className="close" onClick={handleClose}>
          &times;
        </span>
      </header>
      {get(cart, 'length', 0) ? (
        <CartItem handleClose={handleClose} />
      ) : (
        <EmptyCart handleClose={handleClose} />
      )}
    </div>
  );
});
