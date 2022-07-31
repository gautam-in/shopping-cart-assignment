import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CartModal({children, show, handleClose}:{children:any, show:boolean, handleClose: ()=>void}) {

  return (
      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        animation={false}
        contentClassName='cart-content-modal border-0'
        backdropClassName='backdrop-container'
      >
        <Modal.Header className='cart-modal-header p-2 align-items-center d-none d-lg-flex'>
          <Modal.Title><strong>My Cart</strong>  (1 item)</Modal.Title>
          <div role="button" onClick={handleClose}>X</div>
        </Modal.Header>
        <Modal.Body className='px-0' style={{background:'#f0ecec'}}>
          {children}
          <div className='p-2 bg-white m-2 rounded'>You won't find it cheaper anywhere</div>
        </Modal.Body>
        <Modal.Footer className='d-flex flex-column'>
          <div>Promo code can be applied on payment page</div>
          <button className=' border-0 d-flex w-100 justify-content-between mt-2 p-2 rounded' style={{background:'rgb(216, 4, 84)', color:'white'}}>
            <div><small>Procees to checkout</small></div>
            <div>Rs. 187 {'>'}</div>
          </button>
        </Modal.Footer>
      </Modal>
  );
}

export default CartModal;