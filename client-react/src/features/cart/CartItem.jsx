import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './CartSlice'

import './Cart.scss';


export const CartItem = (props) => {
    const {item} = props;
    const dispatch = useDispatch()

  return (
    <div className='mb-3 cart-product'><Row>
    <Col xs={3} sm={2}>
        <img src={process.env.REACT_APP_BASE_URL + item.imageURL} width="100%" alt={item.name}/>
    </Col>
    <Col>
        <h6 className='cart-product-title'>{item.name}</h6>
        <div className='product-operator-container'>
            <button className='product-operator' onClick={() => dispatch(removeFromCart(item.id))}></button>
            <div>{item.qty}</div>
            <button className='product-operator plus' onClick={() => dispatch(addToCart(item))}></button>
            <div className='product-price'>
                <span>x </span>
                Rs. {item.price}
            </div>
        </div>
    </Col>
    <Col xs={3} className="d-flex align-items-end">
        Rs. {item.totalPrice}
    </Col>
</Row>
</div>
  )
}
