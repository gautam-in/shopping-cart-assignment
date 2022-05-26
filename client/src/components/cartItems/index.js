import { useSelector,useDispatch } from 'react-redux'
import {addToCart} from '../../pages/products/productsSlice'
import './cartItems.css'
function CartItems(props) {
    const {cartItems} = props
    const dispatch = useDispatch()
    return (
        <>
            <div className='cartItem_container_section'>
                {cartItems.map((item, i) => {
                    return (
                        <div className='cartItem_container' key={item.id}>
                            <div className="cartItem_img">
                                <img className="" src={item.imageURL} />
                            </div>
                            <div className='cartItem_price_counter_container'>
                                <div className='cartItem_title'>{item.name}</div>
                                <div className="cartItem_price_container">
                                    <div className='counter_container'>
                                        <div className='cartItem_counter_block'>
                                            <button onClick={() => {dispatch(addToCart({"product":item, flag:'dec'}))}}><i className="fa-solid fa-circle-minus" ></i></button>
                                            <p>{item.quantity}</p>
                                            <button onClick={() => {dispatch(addToCart({"product":item, flag:'inc'}))}}><i className="fa-solid fa-circle-plus" ></i></button>
                                            <p> X </p>
                                            <p>{item.price}</p>
                                        </div>
                                        <p className='item_price'> {item.totalPrice}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    );
}

export default CartItems;
