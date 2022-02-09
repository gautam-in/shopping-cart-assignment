import { CartItem } from "../../reducers/cartReducer";

interface ModalList {
  item: CartItem;
  key: string;
  onAddToCart: (val: string) => void;
  onRemoveFromCart: (val: string) => void;
}

const CustomModalItem: React.FC<ModalList> = (props) => {
  return (
    <div className="modal-product-card shadow p-3 mb-4 bg-white rounded">
      <div className="modal-product-image">
        <img src={props.item.imageURL.substring(1)} alt="test" />
      </div>
      <div className="modal-product-title">
        <div className="model-item-name">{props.item.name}</div>
        <div className="modal-product-price pt-3">
          <button
            className="modal-item-button"
            onClick={() => props.onRemoveFromCart(props.item.id)}
          >
            -
          </button>
          <div>{props.item.quantity}</div>
          <button
            className="modal-item-button"
            onClick={() => props.onAddToCart(props.item.id)}
          >
            +
          </button>
          <div> X </div>
          <div>Rs {props.item.price}</div>
          <div className="modal-total-price"> Rs {props.item.totalPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default CustomModalItem;
