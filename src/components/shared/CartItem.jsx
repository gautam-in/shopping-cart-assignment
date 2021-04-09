import {React} from "react"
import { useSelector, useDispatch} from "react-redux"
import { handleAddItem, handleRemoveItem } from "../../redux/actions";

import * as Endpoints from '../Endpoints'

const CartItem = ({item}) => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    let qnty = itemQuantity();

    function itemQuantity(){
        for (let i of cart){
            if(i.id === item.id) return i.qnty;
        }
    }

    return (
        <div className="cart-item">
            <div className="item-image-small">
                <img src={Endpoints.base_uri+item.imageURL} alt="" />
            </div>
            <div className="item-quantity">
                <strong>{item.name}</strong>
                <button
                    className="btn-primary update-item"
                    onClick={()=>dispatch(handleAddItem(item))}
                >
                    +
                </button>
                <span className="item-quantity-count">{qnty}</span>
                <button
                    className="btn-primary update-item"
                    onClick={()=>dispatch(handleRemoveItem(item))}
                >
                    -
                </button>
                <span className="item-rate">Rs. {item.price}</span>
            </div>
            <div className="item-total-price">Rs. <span>{item.price * qnty}</span></div>
        </div>
    )
}

export default CartItem;