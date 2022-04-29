import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import Cart from "./Cart";

const ModalCart = () => {
  const showCart = useSelector((state) => state.uiReducer.showCart);
  const dispatch = useDispatch();
  const cartTotalQty = useSelector((state) => state.cartReducer.totalQty);
  return (
    <>
      <Modal
        show={showCart}
        onHide={() => dispatch(uiActions.setshowCart({ show: false }))}
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>
            My Cart{" "}
            {cartTotalQty
              ? cartTotalQty > 1
                ? `(${cartTotalQty} items)`
                : `(${cartTotalQty} item)`
              : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModalCart;
