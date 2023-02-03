import { useSelector,useDispatch } from 'react-redux';
import { cartActions } from '../../redux/actionMethod/cartSlice';
import './CartItem.scss';

// import {CartItemContainer,CartItemImgContainer,CartItemImg,
//     CartItemMetaDataContainer,CartItemTitle,CartItemQtyContainer,CartItemQtyUpdater,CartItemMetaData,
//     CartItemQty,CartItemPriceContainer,CartItemPrice,CartItemTotalPrice} from './CartItem.styles';

const CartItem = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);

    const addItem = (id) => {
        dispatch(cartActions.addCartItemCount(id));
    }

    const removeItem = (id) => {
        dispatch(cartActions.subtractCartItemCount(id));
    }

    return(
        <>
        {cartItems && cartItems.map(item =>

        (<div className='cartItemWrapper' key={item.id}>
            <div  className='cartItemWrapper_Img'>
                <img src={item.imageURL}/>
            </div>

            <div className='cartItemWrapper_Body'>
                <h4 className='cartItemWrapper_Body_Header'>{item.name} </h4>
                <div className='cartItemWrapper_Body_Desc'>
                    <div className='itemQty'>
                        <button className='itemQty_Modify' onClick={()=>removeItem(item.id)}>-</button>
                        <h4 className='itemQty_Data'>{item.qty}</h4>
                        <button className='itemQty_Modify' onClick={()=>addItem(item.id)}>+</button>
                    </div>

                    <div className='itemPrice'>
                    &#10006;
                    <h4 className='itemPrice_Data'>Rs. {item.price}</h4>
                    </div>

                    <h4 className='totalPrice'>Rs. {item.price * item.qty}</h4>

                </div>
            </div>
        </div>))}
        </>
    )
}

export default CartItem;