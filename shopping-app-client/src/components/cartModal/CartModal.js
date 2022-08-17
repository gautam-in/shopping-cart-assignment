import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useDispatch , useSelector } from "react-redux";
import { handleDisplayCartModal } from "../../actions/cart";
import Button from 'react-bootstrap/Button';


const CartModal = () => {
const { shouldDisplayCartModal = false } = useSelector(state=>state.cart)
const dispatch = useDispatch();

  return (
    <Modal show={shouldDisplayCartModal} onHide={()=>{
        dispatch(
            handleDisplayCartModal()
          )
    }}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>dispatch(handleDisplayCartModal())
}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>dispatch(handleDisplayCartModal())}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default CartModal