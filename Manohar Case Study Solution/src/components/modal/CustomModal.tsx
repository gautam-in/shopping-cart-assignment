import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, RemoveFromCart } from "../../actions/action";
import { CartItem } from "../../reducers/cartReducer";
import CustomModalItem from "./CustomModalItem";

interface Modal {
  onClose: () => void;
  title: string;
  price: number;
}

const portalDiv = document.getElementById("portal");
const space = "   ";

const CustomModal: React.FC<Modal> = (props: any) => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const mainCart = useSelector((state: any) => state.mainCart);
  const addtocart = (val: string) => {
    dispatch(AddToCart(val, mainCart));
  };

  const removefromcart = (val: string) => {
    dispatch(RemoveFromCart(val));
  };

  return portalDiv
    ? ReactDOM.createPortal(
        <div className="modal" onClick={props.onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">{props.title}</div>
              <button className="modal-button-cross" onClick={props.onClose}>
                X
              </button>
            </div>
            <div className="modal-body">
              {props.price === 0 ? (
                <div className="modal-body-content">
                  <div className="first-div">No items in your cart</div>
                  <div className="second-div">
                    Your favourite items are just a click away
                  </div>
                </div>
              ) : (
                <>
                  {cart.map((item: CartItem) => (
                    <CustomModalItem
                      item={item}
                      key={item.id}
                      onAddToCart={() => addtocart(item.id)}
                      onRemoveFromCart={() => removefromcart(item.id)}
                    />
                  ))}
                </>
              )}
            </div>
            <div className="modal-footer">
              {props.price !== 0 ? (
                <>
                  <h5>Promo code can be applied on payment page</h5>
                  <button onClick={props.onClose} className="modal-button">
                    Proceed to Checkout
                    <div>
                      Rs.{props.price} <span>{space}</span>
                      {">"}
                    </div>
                  </button>
                </>
              ) : (
                <button onClick={props.onClose} className="modal-button-middle">
                  Start Shopping
                </button>
              )}
            </div>
          </div>
        </div>,
        portalDiv
      )
    : null;
};

export default CustomModal;
