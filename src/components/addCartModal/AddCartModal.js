import  React, { useState, useEffect, } from 'react';
import { Box, Modal, Button, } from '@material-ui/core';
import './AddCartModal.css';
import CloseIcon from '../../images/close.png';
import CroseIcon from '../../images/plus.png';
import RightArrow from '../../images/next-arrow.png';

import CartItemCard from '../cartitemcard/CartItemCard';

export default function AddCartModal(props) {



  const handleModelCloseCurrent = () => {
    props.handleModelClose();
  }

  return (
    <React.Fragment>
      <Modal
        open={props.modalOpen}
        onClose={handleModelCloseCurrent}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        {/* <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleModelCloseCurrent}>Close Child Modal</Button>
        </Box> */}
        <div className='addCartModal'>
            <div className='addCartModalRightAligmnposition'>
              <div className='addCartModalHeader'>
                <h4> My Cart  &nbsp;  {props.cartCount === 0 ? ' ' : <label>[{props.selectedItems.length} item]  </label> } </h4> <button onClick={handleModelCloseCurrent}> <img src={CloseIcon} alt='Close Icon' /> </button>
              </div>
              <div className='addCartModalContent'>
                {
                          props.cartCount === 0 ? 
                          <div className='addCartModalContentSubEmptyCart'>
                            <h4> No items in your cart</h4>
                            <h6> Your favourite items are just in a click away</h6>
                          </div>
                          : 
                          <div className='addCartModalContentItemExisted'>
                            {props.selectedItems !== null && <React.Fragment>
                                  <CartItemCard selectedItems={props.selectedItems}/>
                                </React.Fragment>}
                          </div> 
                }
              </div>
              <div className='addCartModalFooter'>
                {props.cartCount === 0 ?  
               <Button className='btn-primary' onClick={handleModelCloseCurrent} > Start Shopping</Button> :    <div className='addCartModalFooterCeckout'>
               <p> Promode can be applied on payment page</p>
               <Button className='btn-primary'><span>Proceed to Chekcout </span> <span>Rs. 178 <img src={RightArrow} alt="right arrow" /> </span></Button>
             </div> }
              </div>

            </div>
        </div>
      </Modal>
    </React.Fragment>
  );
}
