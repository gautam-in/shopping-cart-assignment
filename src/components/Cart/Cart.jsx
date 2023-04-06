import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useItemContext } from 'src/context/ItemContext';
import './Cart.scss';

const Cart = () => {
  const { cartItems, setCartItems } = useItemContext();
  const [items, setItems] = useState(cartItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const price = items.reduce((acc, item) => acc + item.count * item.price, 0);
    setTotalPrice(price);
  }, []);

  const noItems = () => {
    return (
      <>
        <div className='no-items'>
          <h3>No items in your cart</h3>
          <h6 style={{ marginTop: '10px' }}>
            Your favourite items are just a click away
          </h6>
        </div>
        <footer className='no-items-cart-footer'>
          <Button onClick={() => navigate('/')}>Start Shoping</Button>
        </footer>
      </>
    );
  };

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

  const renderItems = () => {
    return (
      <>
        <div className='cart-title fs-4 fw-bold m-1'>
          My Cart{' '}
          <span className='fw-normal fs-6'>
            ({items.length} {items.length > 1 ? 'items' : 'item'})
          </span>
        </div>
        {items.map((item, index) => (
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
        ))}
        <div className='tag m-2'>
          <img style={{ width: '7em' }} src='/static/images/lowest-price.png' />
          <h6 className='pl-1 pt-1'>You won't find it cheaper anywhere</h6>
        </div>
        <footer className='cart-footer'>
          <h6 style={{ textAlign: 'center' }}>
            Promocode applied on payment page
          </h6>
          <Button>
            <span style={{ float: 'left' }}>Proceed to Checkout</span>
            <span style={{ float: 'right' }}>Rs. {totalPrice} &gt;</span>
          </Button>
        </footer>
      </>
    );
  };

  return items.length > 0 ? renderItems() : noItems();
};

export default Cart;
