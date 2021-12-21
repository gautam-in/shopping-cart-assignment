import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { productsActions } from "../../../pages/products/redux/actions";
import { productsSelectors } from "../../../pages/products/redux/selectors";
import { getTotal } from "../../../utils";
import Button from "../../atoms/button/button";
import useModal from "../../../hooks/useModal";
import CartButton from "./cartButton";
import "./cartModal.scss";

function CartModal() {
  const { modalRef, showModal, hideModal } = useModal();
  const dispatch = useDispatch();
  const cartItemData = useSelector(
    productsSelectors.getcartItemsSelectors.selectCartItemsData,
    shallowEqual
  );

  console.log(cartItemData);

  const handleOnAddItem = (product) => {
    dispatch(
      productsActions.cartItemActions.addCartItem(product, cartItemData)
    );
  };

  const handleOnRemoveItem = (product) => {
    dispatch(
      productsActions.cartItemActions.removeCartItem(product, cartItemData)
    );
  };

  return (
    <div>
      <CartButton onClick={showModal} />
      <div className="modal fade" ref={modalRef} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark ">
              <h5 className="modal-title modal__header_heading">{`My Cart ( ${
                getTotal(cartItemData, "quantity") || 0
              } item )`}</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={hideModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body modal__body">
              <ul className="modal__body_cartList">
                {cartItemData?.length > 0 ? (
                  cartItemData?.map((item) => {
                    return (
                      <li
                        className="modal__body_cartList_items d-flex mb-2"
                        key={item.id}
                      >
                        <img
                          src={item.imageURL}
                          className="modal__body_cartList_img"
                          alt={item.name}
                        />
                        <div className="modal__body_cartList_details">
                          <h2 className="modal__body_cartList_name truncate">
                            {item.name}
                          </h2>
                          <button
                            className="modal__body_cartList_buttonIncrementDecrement"
                            onClick={()=>handleOnRemoveItem(item)}
                          >
                            -
                          </button>
                          <span className="quantity">{item.quantity}</span>
                          <button
                            className="modal__body_cartList_buttonIncrementDecrement"
                            onClick={() => handleOnAddItem(item)}
                          >
                            +
                          </button>
                          <span className="">X</span>
                          <span className="modal__body_cartList_price mx-4 ">
                            ₹ {item.price}
                          </span>
                          <span className="cart_list-item-total mx-3 ">
                            ₹ {item.quantity * item.price}
                          </span>
                        </div>
                      </li>
                    );
                  })
                ) : (
                  <div className="no-item-text">
                    <b>No items in your cart</b>
                    <p>Your favourite items are just a click away</p>
                  </div>
                )}
              </ul>
            </div>
            <div className=" modal-footer modal__footer">
              <p className="text-center">
                Promo code can be applied on payment page
              </p>
              <Button onClick={hideModal}>
                <div className="d-flex justify-content-between align-items-center">
                  {cartItemData?.length > 0 ? (
                    <>
                      <p>Proceed Checkout </p>
                      <p>
                        Rs.
                        {cartItemData.reduce((total, item) => {
                          return total + item.price * item.quantity;
                        }, 0)}
                      </p>
                    </>
                  ) : (
                    <p>Start Shopping</p>
                  )}
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
