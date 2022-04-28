import React, { useEffect, useState } from "react";
import './CartItemCard.css';
import CloseIcon from '../../images/close.png';
import CroseIcon from '../../images/plus.png';
import cardSectionImage1 from '../../images/category/fruits.png';



function CartItemCard(props) {    


  const [ itemList, setItemList] = useState([]);
  const [ initialCount, setiaInitialCount] = useState(1);


  const incrementcount = (item) => {
    // const currentItem = item;
    // itemList.push({
    //   id: currentItem.id,
    //   itemCount: 1,
    //   itemPrice: 200
    // })
    // setItemList(itemList);
  }
  const decrementcount = (item) => {
    // const currentItem = item;
    // itemList.push({
    //   id: currentItem.id,
    //   itemCount: 1,
    //   itemPrice: 200
    // })
  }

return (
      <React.Fragment>
        {props.selectedItems.map((item, index) => {
          return (
            <div key={index} className='addCartPrdItem'>
                      <div className='addCartPrdItemImg'>
                        <img src={item.imageURL} alt='add Cart item' /> 
                      </div>
                      <div className='addCartPrdItemTile'>
                          <h5> {item.name} </h5>
                          <div className='addCartPrdItemCouterVal'>
                              <div onClick={decrementcount(item)}> <span> - </span></div>
                              <label> {initialCount} </label>
                              <div onClick={incrementcount(item)}> <span> + </span> </div>
                              <button> <img src={CroseIcon} alt="Crose Icon" />  </button>
                              <b>Rs. {initialCount * item.price} </b>
                          </div>
                      </div>
                      <div className='addCartPrdItemPrice'>
                        <b>Rs. {initialCount * item.price} </b>

                      </div>
            </div>
          )
        })}
            
      </React.Fragment>
      )
}
export default CartItemCard;



