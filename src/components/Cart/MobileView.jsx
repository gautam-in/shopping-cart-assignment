import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Modal } from 'react-bootstrap';

const MobileView = ({
  title,
  body,
  footer,
  noItemsExistsContent,
  isItemsExistsInCart,
  noItemsExistsFooter,
  showModal,
  cheaperTag,
  closeModal,
}) => {
  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title()}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='cart-modal-body'>
        {isItemsExistsInCart ? body() : noItemsExistsContent()}
        {isItemsExistsInCart && cheaperTag()}
      </Modal.Body>
      <Modal.Footer>
        {isItemsExistsInCart ? footer() : noItemsExistsFooter()}
      </Modal.Footer>
    </Modal>
  );
};

export default MobileView;
