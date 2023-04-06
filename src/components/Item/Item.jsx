import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useItemContext } from 'src/context/ItemContext';
import './Item.scss';

const Item = ({ item }) => {
  const { name, description, imageURL, price, stock, id } = item;
  const { cartItems, setCartItems } = useItemContext();
  const addToCart = () => {
    const arr = [...cartItems];
    const index = cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      const arr = [...cartItems];
      arr[index].count += 1;
    } else {
      arr.push(item);
    }
    setCartItems(arr);
  };

  return (
    <div className='item-container'>
      <h4>{name}</h4>
      <div className='desc-section'>
        <img style={{ width: '100px', height: '100px' }} src={imageURL} />
        <div className='desc'>{description}</div>
      </div>
      <Button onClick={addToCart}>{`Buy Now @ Rs.${price}`}</Button>
    </div>
  );
};

export default Item;
