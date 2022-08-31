import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';

const Cart = ({ onClose }) => {
  return (
    <Modal type="cart" onClose={onClose}>
      Hello cart
    </Modal>
  );
};

export default Cart;

Cart.propTypes = {
  onClose: PropTypes.func
};
