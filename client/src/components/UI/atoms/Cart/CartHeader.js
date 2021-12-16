import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../organisms/Cart/Cart.scss";
const CartHeader = ({ data, cartSideNav }) => {
  return (
    <div className="sidebar-cart-header-main">
      <h6>My Cart</h6> <span>( {data.length ? data.length : 0} Items )</span>
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={cartSideNav}
      >
        <span aria-hidden="true">
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </button>
    </div>
  );
};
export default CartHeader;
