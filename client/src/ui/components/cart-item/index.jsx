import Button from "../../elements/button";
import { cartAddRemove, cartDetails, cartItemDiv, cartItemMain, cartPrice, addRemoveButton } from './style';

const CartItem = (props) => {
    const { cartItem } = props;
    return (<div style={cartItemMain}>
        <div style={cartItemDiv}>
            <img alt='' width='100' height='100' src={cartItem.imageURL} />
            <div style={cartDetails}>
                <h3>{cartItem.name}</h3>
                <div style={cartAddRemove}>
                    <Button style={addRemoveButton} value='-' />
                    2
                    <Button style={addRemoveButton} value='+' />
                    <p>{`X   Rs.${cartItem.price}`}</p>
                </div>
            </div>
        </div>
        <div style={cartPrice}>{`Rs. ${cartItem.price * 2} `}</div>
    </div >)
}

export default CartItem;