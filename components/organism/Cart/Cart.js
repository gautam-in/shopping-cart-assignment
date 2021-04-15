import CartItem from "./CartItem"
import styles from './cart.module.scss'
function EmptyCart () {
    return(
        <div className={styles.cartempty}>
                <p style={{fontSize:20,fontWeight:'bold'}}>No items in cart.</p>
                <p>Your favourite item are just a click away</p>
        </div>
    )
    
}

export default function Cart({cartData,actions}) {
    // calculating the total price
const totalPrice = cartData?.length&&cartData.reduce((tally,cartItem)=>{
    return tally + cartItem.count * cartItem.price
        },0)
return(
    <div className={styles.cartmain}>
        <div className={styles.cartwrapper}>
        <div className={styles.cartcontent}>
            <header className={styles.cartheader}>
                <div className={styles.cartheadercount}>
                    <p>
                        My Cart ({cartData?.length}) items
                    </p> 
                </div>
                <button className={styles.cartclosebutton} onClick={()=>actions.toggleCart()}>
                    X
                </button>
            </header>
            <div className={styles.cartitemcontainer}>
                {cartData&&cartData.length?
                    cartData.map((item)=>{
                        return(
                            <CartItem item={item} actions={actions}/>)
                        }) :
                    <EmptyCart  />
                }
            </div>
            {cartData&&cartData.lenght&&
            <div className={styles.cartbanner}>
                <img src="../static/images/lowest-price.png" width="100px" />
                <p>You wont find it cheaper any where</p>
            </div>}

            <footer className={styles.cartfooter}>
                <div>
                    <p className={styles.cartpromo}>Promo code can be applied on payment page</p> 
                </div>
                <button className={styles.cartpaymentbutton} onClick={()=>actions.toggleCart()}>
                     {cartData&&cartData.length ?`Proceed to checkout Rs.${totalPrice}`: "Start Shopping"}
                </button>
            </footer>
        </div>
        </div>
        </div>
    )
    
}