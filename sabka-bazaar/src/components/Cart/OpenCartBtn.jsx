import PropTypes from "prop-types";
const OpenCartBtn = ({ toggleCart, cartItemsCount }) => {
  return (
    <div role="button" onClick={toggleCart} className="open-cart-btn">
      <img
        src="/static/images/cart.svg"
        width="30"
        height="30"
        alt="Go to cart"
      />
      <div className="cart-count-container">
        <p>{cartItemsCount} items</p>
      </div>
    </div>
  );
};

OpenCartBtn.propTypes = {
  toggleCart: PropTypes.func,
  cartItemsCount: PropTypes.number,
};

export default OpenCartBtn;
