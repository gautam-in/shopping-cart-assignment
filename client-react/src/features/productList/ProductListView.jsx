import React from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux'

import { addToCart } from '../cart/CartSlice';

import './ProductList.scss';

export const ProductListView = (props) => {
  const { list } = props;
  const dispatch = useDispatch()

  const addToCartList = (item) => {
    dispatch(addToCart(item))
  }

  const BASE_URL = "http://127.0.0.1:5500";

  return (
    <div className='product-container'>
      {list.map((ele, index) => (
        <Card key={index} className="product">
          <Card.Title>{ele.name}</Card.Title>
          <div className='card-layout'>
            <div className='card-img-container'><Card.Img src={BASE_URL + ele.imageURL} alt={ele.name} /></div>
            <Card.Body>
              <Card.Text>
                {ele.description}
              </Card.Text>
              <div className="product-pricing d-none d-xl-flex">
                <div className="product-price">MRP RS.{ele.price}</div>
                <button className="buy-btn" onClick={() => addToCartList(ele)}>Buy Now</button>
              </div>
            </Card.Body>
          </div>
          <button className="buy-btn d-block d-xl-none w-100" onClick={() => addToCartList(ele)}>Buy Now @ {ele.price}</button>
        </Card>
      ))}


    </div>
  )
}
