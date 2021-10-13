import { useGlobalData } from '../../Context/dataContext';
import { useHistory } from 'react-router';
import Button from '../Button/Button';
import css from './Cart.module.css';
function Cart(){
    let history=useHistory();
    let {cart,addToCart,toggleCart,user}=useGlobalData();
    let {cartTotal,cartItems,isCartOpen,cartCount}=cart;
    if(!isCartOpen){
        return null;
    }

    function handleCheckout(){
        toggleCart();
        if(!user){
            history.push({
                pathname:'/signin',
                state:{
                    refrer:'/checkout'
                }
            })
        }else{
            history.push({
                pathname:'/checkout'
            })
        }
    }

    return <div className={css.CartContainer}>
        <div className="wrapper relative h-100">
            <div className={css.Cart}>
                <div className={css.CartHead}>
                    <div><strong>My Cart </strong>({cartCount} Item)</div>
                    <div className={css.Close} title="Close Cart" onClick={toggleCart}>&times;</div>
                </div>
                <div className={css.CartBody}>
                    {
                        cartItems.map(item=><CartItem key={item.id} item={item} addToCart={addToCart}/>)
                    }
                    
                    <div className={css.Banner}>
                        <div><img src="/static/images/lowest-price.png" alt="lowest price" /></div>
                        <div>You won't find it cheaper anywhere</div>
                    </div>
                </div>
                <div className={css.CartFooter}>
                    {cartCount?<>
                        <p>Promo can be applied on Payment page</p>
                        <Button block onClick={handleCheckout}><span>Proceed to Checkout</span>  <span>Rs {cartTotal} ></span></Button>
                        </>:
                    <Button block onClick={()=>{toggleCart();history.push("/")}}><div>Start Shopping</div></Button>}
                </div>
            </div>
        </div>
    </div>
}
export default Cart;

export function CartItem({item,addToCart}){
    return <div className={css.CartItem}>
        <div><img src={item.imageURL} alt="image" /></div>
        <div className={css.Details}>
            <p>{item.name}</p>
            <div> <Button small onClick={()=>addToCart(item,false)}>-</Button> <span>{item.qty}</span> <Button small onClick={()=>addToCart(item,true)}>+</Button> <span> x Rs.{item.price}</span> <output>Rs. {item.qty*item.price}</output></div>
        </div>
    </div>
}