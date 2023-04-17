import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import StoreContext from "../../Store/CommonStore";
import styles from "./CartContent.module.scss";
export default function CartContent(props) {
    const ctxVal=useContext(StoreContext);
    const [totalAmount,setTotalAmount]=useState(0);
    useEffect(()=>{ 
        let ta=0;
        for(let i=0;i<ctxVal.cartList.length;i++){
            let id=ctxVal.cartList[i].id;
            ta=ta+ctxVal.cartList[i].price *ctxVal.productIdsInCart[id];
        }
        setTotalAmount(ta);
    },[ctxVal.productIdsInCart,ctxVal.cartList])
  return (
    <>
      <div className={styles["cartmodal__section__heading"]}>
        <h1 className={styles["cartmodal__section__heading__title"]}>My Cart ({ctxVal.count} item)</h1>
        <button className={styles["cartmodal__section__heading__button"]+ " button-wrapper"} onClick={()=>props.closeCart()}>
          ✕ <span className='sr-only'>{"Close the Cart"}</span>
        </button>
      </div>
      <div className={`${styles["cartmodal__section__flex"]} ${styles["cart-tablet"]}`}>
        <section className={styles["cart-tablet__section-wrapper"]}>
            {ctxVal.cartList && ctxVal.cartList.length>0? (
                ctxVal.cartList.map((product)=>{
                    return(
                        <section className={styles["cart-section"]} key={product.id}>
                                <Image
                                className={styles["cart-section__image"]+ " image-wrapper"} 
                                src={product.imageURL}
                                alt={`Image of ${product.name}`}
                                height={68}
                                width={60}
                                />
                                <h2 className={styles["cart-section__title"]}>
                                {product.name}
                                </h2>
                                <div className={styles["counter"]}>
                                <button className={styles["counter__button"]+" button-wrapper"} onClick={()=>ctxVal.removeItemToCart(product)}>-<span className='sr-only'>{`Remove 1 ${product.name} from Cart`}</span></button>
                                <p className={styles["counter__text"]}>{ctxVal.productIdsInCart[product.id]}</p>
                                <button className={styles["counter__button"]+" button-wrapper"} onClick={()=>ctxVal.updateItemToCart(product)}>+<span className='sr-only'>{`Add 1 ${product.name} to Cart`}</span></button>
                                <p className={styles["counter__multiply"]}>✕</p>
                                <p className={styles["counter__text"]}>{product.price}</p>
                                </div>
                                <p className={styles["cart-section__totalprice"]}>{ctxVal.productIdsInCart[product.id]*product.price}</p>
                        </section>

                    )
                })
                
            ):(
                
                <></>
            )}
          
          <div className={styles["cart-tablet__discount"]}>
            <Image
              src="/static/images/lowest-price.png"
              className={styles["cart-tablet__discount__img"]+ " image-wrapper"} 
              height={36}
              width={100}

              alt="Discounted Image"
            />
            <p className={styles["cart-tablet__discount__text"]}>
              You won't find it cheaper anywhere
            </p>
          </div>
        </section>
        <footer className={styles["cart-tablet__footer"]}>
          <p className={styles["cart-tablet__footer__text"]}>
            Promo code can be applied on payment page
          </p>
          <button className={styles["cart-tablet__footer__buyout-button"] +" button-wrapper"} onClick={()=>props.closeCart()}>
            <span style={{float:"left"}}>Proceed to Checkout</span>
            <span style={{float:"right"}}> Rs.{totalAmount} ❯</span>
          </button>
        </footer>
      </div>
    </>
  );
}
