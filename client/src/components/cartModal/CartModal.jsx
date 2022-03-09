import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
import classes from './CartModal.module.css'
import CartTableView from '../CartTableView/CartTableView'
import { cartHandler } from '../../redux/cart/cart.actions'
const CartModal = () => {


    const {
        cart : {
            count,
            cartItems
        }
    } = useSelector((state)=> state)
    const dispatch = useDispatch()
    const history = useHistory()

    const [totalAmount, setTotal] = useState(0)

    useEffect(()=>{
        setTotal(cartItems.reduce((acc, curr)=>{
            return acc + (curr.quantity * curr.price)
        }, 0)) 
    }, [cartItems])

    const handleClick = () => {
        history.push('./Products')
        dispatch(cartHandler())
    }

    console.log(cartItems)

    return (
       
            <div className={classes.cartmodal__section}>
                <div className={classes.cartmodal__ection__heading}>
                    <h1 className={classes.cartmodal__section__heading__title}>
                        <span>My Cart</span>({count} items)
                    </h1>
                    <button className={classes.cartmodal__section__heading__button}
                        onClick={()=>dispatch(cartHandler())}
                    >
                        &#10005;
                    </button>
                </div>
                <CartTableView className={classes.cartmodal__section__flex} cartItems={cartItems} count={count}/>
                
                {
                    count>0 ? 
                    (
                        <footer className={classes.cart__tablet__footer}>
                            <p className={classes.cart__tablet__footer__text}>
                            Promo code can be applied on payment page
                            </p>
                            <button className={classes.cart__tablet__footer__buyout__button}>
                                <span>Proceed to Checkout</span>
                                <span>Rs.{totalAmount} &#10095;</span>
                            </button>
                        </footer>
                    ) :

                    (
                        <footer className={classes.nocart__tablet__footer}>
                            
                            <button className={classes.nocart__tablet__footer__buyout__button} onClick={()=> handleClick()}>
                                <span>Start Shopping</span>
                            </button>
                        </footer>
                    )
                }
                
                
            </div>
        
    )


}

export default CartModal