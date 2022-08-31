import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import classes from './Modal.module.scss';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  console.log(props.type);
  return (
    <div className={`${props.type === 'sidebar' ? classes.sideBar : classes.cartModal}`}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('modal-root');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay type={props.type}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;

Backdrop.propTypes = {
  onClose: PropTypes.func
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node
};

Modal.propTypes = {
  onClose: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node
};
