import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { cartHandler } from '../../redux/cart/cart.actions'
import classes from './Cart.module.css'
import logo from './cart.svg'

import Image from '../image/Image'
import Modal from '../Modal/Modal'
import CartModal from '../cartModal/CartModal'

const Cart = () => {

    
    const {
        cart : {
            cartOpen,
            count
        }
    } = useSelector((state)=> state)
    const dispatch = useDispatch()

    
    return (

        <>
            <div className={classes.wrapper} onClick={()=>dispatch(cartHandler())}>

                <Image source={logo} alt={"cart icon"} className={classes.image}/>
                
                {/* <img src={logo} alt="Cart" className='' /> */}
                <p className={classes.items}>{count} items</p>
            </div>
            {
                cartOpen ? 
                 <Modal>
                    <CartModal />   
                 </Modal> 
                : 
                ""
            }      
        </>
    )
}

export default Cart