import CartList from "../../molecules/PLCL/CartList";
import { Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import { useSelector } from "react-redux";
import "./Cart.scss";
import CartHeader from "../../atoms/Cart/CartHeader";
import CartFooter from "../../atoms/Cart/CartFooter";
import CartBody from "../../atoms/Cart/CartBody";

const Cart = ({ isSlideOpen, cartSideNav }) => {
  const cartListData = useSelector((state) => state.cartReducer.cartList);

  return (
    <div>
      <div>
        <Modal
          className="sidebar sidebar-wrap-modal"
          modal="true"
          isOpen={isSlideOpen}
          data-testid="cart-slider"
          style={{ top: "8rem", left: "43rem" }}
        >
          <div className="sidebar-cart-header-wrap">
            <ModalHeader>
              <CartHeader data={cartListData} cartSideNav={cartSideNav} />
            </ModalHeader>
          </div>

          <div className="sidebar-cart-body-wrap">
            <div className="sidebar-cart-body-main">
              <ModalBody>
                {cartListData.length ? (
                  <CartList data={cartListData} />
                ) : (
                  <div className="no-cart-items-found-wrap">
                    <CartBody />
                  </div>
                )}
              </ModalBody>
            </div>
            {cartListData.length && (
              <ModalFooter style={{ display: "block" }}>
                <CartFooter data={cartListData} cartSideNav={cartSideNav} />
              </ModalFooter>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default Cart;
