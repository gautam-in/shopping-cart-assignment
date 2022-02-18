import React,{useContext} from 'react'
import './cart-item.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { MyContext } from "../../App";
function CartItem({ item }) {
  const cart = useContext(MyContext);
  const {decereaseCartQty,removeItem,increaseCartQty}=cart;
    return(
    <div className='cart-item'>
    <img className='cart-item-image' src={item.imageURL} alt='item' />
    <div className='item-details'>
      <span className='name'>{item.name}</span>
      <div className='cart-quantity-container'>
        <div className="cart-item-qty">
        <FontAwesomeIcon 
          icon={faMinus}
          onClick={(e) => decereaseCartQty(e, item)}
           className="icon"  />
          <span className='price'> {item.quantity} </span>
          

<FontAwesomeIcon icon={faPlus}
           onClick={(e) => increaseCartQty(e, item)}
          className="icon"/>
          <span aria-hidden="true">&times;</span>
          <span className='price'> ${item.price}</span>
        </div>
      <span className='price'>
         {item.quantity * item.price}
      </span>
      </div>
     
      
    </div>
  </div>
    )
}

export default CartItem