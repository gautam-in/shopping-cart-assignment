import React, { useEffect } from 'react'
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal } from '../../store/cart/cartSlice';
import CartProduct from './CartProduct';
import './Modal.scss';
const portalElement = document.getElementById("portal");

const Modal = ({setOpenCart}) => {
    const totalCount= useSelector(state=>state.cart.totalItems);
    const products=useSelector(state=>state.cart.products);
    const totalCost=useSelector(state=>state.cart.totalAmount);
    
    console.log(totalCost,'totalcost');
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(calculateTotal())
    },[products,totalCount,dispatch]);

    const closeHandler=()=>{
        setOpenCart(false)
    }
    return createPortal(
        <>
         <section className='modal__container'>
           <div className='modal__heading'>
             <p>My cart ({totalCount}item)</p>
             <button onClick={closeHandler}>✕</button>
           </div>
           <div className='modal__product'>
              {
                products.map((product)=>{
                    return (
                        <CartProduct product={product} totalCount={totalCount} />
                    )
                })
              }
           </div>
          
           <div className='cart__discount'>
            <img src='/static/images/lowest-price.png' alt='promoimage'/>
            <p>You won't find it cheaper anywhere</p>
           </div>
           
           <footer className='cart__checkout'>
            <p>Promo code can be applied on payment page</p>
            <button>
                <span>Proceed to checkout</span>
                <span>Rs.{totalCost}{'>'}</span>
            </button>
           </footer>
    
         </section>
        </>
      ,portalElement
    )
  }
  export default Modal
