import { useGlobalData } from '../../Context/dataContext';
import Button from '../Button/Button';
import { useHistory } from 'react-router';
import { CartItem } from './Cart';
import css from './Cart.module.css';

function Checkout(){
    let history=useHistory();
    let {cart,addToCart}=useGlobalData();
    let {cartItems,cartCount}=cart;

    if(!cartCount){
         history.push("/");
         return null;
    }

    return <div className="wrapper relative h-100">
                <div className={css.Checkout}>
                    <div className={css.CartHead}>
                        <div><strong>My Cart </strong>({cartCount} Item)</div>
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
                         <p><strong>Payment comming soon!</strong></p>
                        <Button  onClick={()=>{history.push("/")}}><div>Back to Shopping</div></Button>
                    </div>
                </div>
            </div>
}

export default Checkout;