import * as React from 'react';
import { Box, Modal, Button, } from '@material-ui/core';
import './Modal.css';
import CloseIcon from '../../images/close.png';

function Nodal(props) {

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
                <h4> My Cart </h4> <button onClick={handleModelCloseCurrent}> <img src={CloseIcon} alt='Close Icon' /> </button>
              </div>
              <div className='addCartModalContent'>
                <div className='addCartModalContentSub'>
                  <h4> No items in your cart</h4>
                  <h6> Your favourite items are just in a click away</h6>
                </div>
              </div>
              <div className='addCartModalFooter'>
               <Button className='btn-primary'> Start Shopping</Button>
              </div>

            </div>
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default Nodal;