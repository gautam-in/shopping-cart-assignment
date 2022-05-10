import CartModalHeader from '../CartModalHeader/CartModalHeader';
import './Cart.css'
import CartDescription from './CartDescription';


const Cart=({setIsCartVisible})=>{


    return(
        <>
        <div className="cartModal">
            <div className='cart'>
            <CartModalHeader quantity={2} setIsCartVisibles={setIsCartVisible} />
            <CartDescription/>
            </div>
           
        </div>
        </>
    )
}

export default Cart;