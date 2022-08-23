/**
 *
 * EmptyCart
 *
 */
import React, { memo } from 'react';

interface Props {
  handleClose: Function;
}

export const EmptyCart = memo((props: Props) => {
  return (
    <>
      <div className="cart-empty">
        <div className="empty-cart-desc">
          <div className="empty-cart-head">
            <strong> No Items in your cart</strong>
          </div>
          <div className="empty-card-info">
            Your favourite items are just a click away
          </div>
        </div>
      </div>
      <footer className="empty-cart-footer">
        <button
          className="shopping"
          onClick={() => {
            props.handleClose();
          }}
        >
          Start Shopping &gt;
        </button>
      </footer>
    </>
  );
});
