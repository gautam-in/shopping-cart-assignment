import { useEffect } from "react";
import "./modal.styles.scss";
import PropTypes from "prop-types";
export const Modal = ({ children, isOpen, handleClose, cartCount }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);
  if (!isOpen) return null;
  const itemsCount = cartCount !== 0 ? `(${cartCount} items)` : "";
  return (
    <div className="modal">
      <div className="modal-header">
        <div>
          <p>My Cart {itemsCount}</p>
        </div>
        <button onClick={handleClose} className="close-btn" tabIndex={0}>
          &#10005;
        </button>
      </div>
      <div className="modal-content">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  cartCount: PropTypes.number,
};
