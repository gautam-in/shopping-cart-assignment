import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Modal } from 'react-bootstrap';
import DesktopView from './DesktopView';
import MobileView from './MobileView';
// import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useItemContext } from 'src/context/ItemContext';
import './Cart.scss';

const Cart = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const { cartItems, setCartItems } = useItemContext();
  const [items, setItems] = useState(cartItems);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const price = items.reduce((acc, item) => acc + item.count * item.price, 0);
    setTotalPrice(price);
  }, []);

  // useLayoutEffect is used to get the screen width synchronously before rendering the component
  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    setIsMobileScreen(mediaQuery.matches);
  }, []);

  // useEffect is used to add/remove event listener for screen resize, and update the isMobileScreen state
  useEffect(() => {
    const handleResize = () => {
      const mediaQuery = window.matchMedia('(max-width: 767px)');
      setIsMobileScreen(mediaQuery.matches);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setShowModal(true);
  }, [isMobileScreen]);

  // const handleCloseModal = () => setShowModal(false);
  // const handleShowModal = () => setShowModal(true);

  const doIncrement = (item, index) => {
    const arr = [...items];
    if (arr[index].stock > arr[index].count) {
      updateItemCount(item, 'INC');
    }
  };

  const updateItemCount = (item, operation) => {
    const arr = [...items];
    const itemInd = arr.findIndex((x) => x.id === item.id);
    if (itemInd !== -1) {
      if (operation === 'INC') {
        arr[itemInd].count += 1;
        setTotalPrice(totalPrice + arr[itemInd].price);
      } else {
        arr[itemInd].count -= 1;
        setTotalPrice(totalPrice - arr[itemInd].price);
      }
    }
    setItems(arr);
  };

  const doDecrement = (item, index) => {
    const arr = [...items];
    if (arr[index].count === 1) {
      arr.splice(index, 1);
      setTotalPrice(totalPrice - item.price);
      setItems(arr);
      setCartItems(arr);
    } else {
      updateItemCount(item, 'DEC');
    }
  };

  const title = () => {
    return (
      <>
        My Cart{' '}
        <span className='fw-normal fs-6'>
          ({items.length} {items.length > 1 ? 'items' : 'item'})
        </span>
      </>
    );
  };

  const footer = () => {
    return (
      <>
        <h6 style={{ textAlign: 'center' }}>
          Promocode applied on payment page
        </h6>
        <Button>
          <span style={{ float: 'left' }}>Proceed to Checkout</span>
          <span style={{ float: 'right' }}>Rs. {totalPrice} &gt;</span>
        </Button>
      </>
    );
  };

  const body = () => {
    return items.map((item, index) => (
      <div key={item.id} className='cart-item-container mt-2'>
        <img style={{ width: '6em' }} src={item.imageURL} />
        <div className='item-info'>
          <div>{item.name}</div>
          <div className='operators-align'>
            <div>
              <span
                className='operator'
                onClick={() => doDecrement(item, index)}
              >
                -
              </span>
              <span>{item.count}</span>
              <span
                className='operator'
                onClick={() => doIncrement(item, index)}
              >
                +
              </span>
              <span className='cross-operator'>&times;</span>
              <span>&nbsp;Rs.{item.price}</span>
            </div>
            <div>Rs. {item.count * item.price}</div>
          </div>
        </div>
      </div>
    ));
  };

  const noItemsExistsContent = () => {
    return (
      <div className='no-items'>
        <h3>No items in your cart</h3>
        <h6 style={{ marginTop: '10px' }}>
          Your favourite items are just a click away
        </h6>
      </div>
    );
  };

  const noItemsExistsFooter = () => {
    return <Button onClick={() => navigate('/')}>Start Shoping</Button>;
  };

  const cheaperTag = () => {
    return (
      <div className='tag m-2'>
        <img style={{ width: '7em' }} src='/static/images/lowest-price.png' />
        <h6 className='pl-1 pt-1'>You won't find it cheaper anywhere</h6>
      </div>
    );
  };

  console.log('isMobileScreen:::', isMobileScreen);
  return isMobileScreen ? (
    <MobileView
      title={title}
      body={body}
      footer={footer}
      noItemsExistsContent={noItemsExistsContent}
      noItemsExistsFooter={noItemsExistsFooter}
      showModal={showModal}
      closeModal={() => setShowModal(false)}
      cheaperTag={cheaperTag}
      isItemsExistsInCart={cartItems.length > 0}
    />
  ) : (
    <DesktopView
      title={title}
      body={body}
      footer={footer}
      cheaperTag={cheaperTag}
      noItemsExistsContent={noItemsExistsContent}
      noItemsExistsFooter={noItemsExistsFooter}
      isItemsExistsInCart={cartItems.length > 0}
    />
  );
};

export default Cart;
