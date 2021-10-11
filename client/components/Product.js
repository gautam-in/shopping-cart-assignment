import React from 'react';
import formatMoney from '../utils/formatMoney';
import { useCart } from './CartContext';
import ProductCardStyle from './styles/ProductCardStyle';

export function Product({item}) {
    const { dispatch } = useCart()
    const addItem = () => {
        dispatch({
            type: 'ADD',
            data: {
                item
            }
        })
    }
    return (<ProductCardStyle>
            <h4> {item.name}</h4>
            <img loading="lazy" src={item.imageURL} alt={item.name} />
            <p></p>
            <div className="flex-row">
              <label>MRP {formatMoney(item.price)} </label>
              <button onClick={addItem}>Buy Now</button>
            </div>
           
    
    </ProductCardStyle>);
}
