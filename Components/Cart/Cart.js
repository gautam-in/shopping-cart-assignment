import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import useFocusTrap from "../../Hooks/useFocusTrap";
import StoreContext from "../../Store/CommonStore";
import styles from  "../Cart/Cart.module.scss";
import CartContent from "../CartContent/CartContent";
import EmptyCartContent from "../EmptyCartContent/EmptyCartContent";

export default function Cart(props) {
  const ctxVal=useContext(StoreContext)
  const cartCount=ctxVal.count;
  const [openCart,setOpenCart]=useState(false);
  const ref = useRef(null);
  const setElementRef = useFocusTrap(null);
  const closeCart=()=>{
    setOpenCart(false);
  }
  useEffect(() => {
    if (openCart) {
      setElementRef(ref);
      document.body.style.overflow = "hidden";
    }

    return () => {
      setElementRef(null);
      document.body.style.overflow = "unset";
    };
  }, [openCart]);
  return (
    <>
      <div
        className={styles["cart-wrapper"]}
        onClick={() => {
          setOpenCart(true);
        }}
        tabIndex={0}
        role="button"
        aria-label="Open Cart"

      >
        <Image
          src="/static/images/cart.svg"
          className={styles["cart-wrapper__image"]}
          alt={"View Cart"}
          height={58}
          width={40}
        />
        <p className={styles["cart-wrapper__text"]}>{cartCount} items</p>
      </div>
      {openCart?(
         <div id="myModal" className={styles["modal"]} role={"dialog"} aria-modal="true" ref={ref}>

  
         <div className={styles["modal-content"]}  >
          {ctxVal.cartList.length>0?(
            <CartContent {...props}  closeCart={closeCart}></CartContent>
          ):(<EmptyCartContent closeCart={closeCart}></EmptyCartContent>)}
           
         </div>
 
         </div>
      ):(<></>)}
     
    </>
  );
}
