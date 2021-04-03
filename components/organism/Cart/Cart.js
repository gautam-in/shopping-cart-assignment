import CartItem from "./CartItem"
function EmptyCart () {
    return(
        <div className="cartempty">
                <p style={{fontSize:20,fontWeight:'bold'}}>No items in cart.</p>
                <p>Your favourite item are just a click away</p>
        </div>
    )
    
}

export default function Cart({cartData,actions}) {
const totalPrice = cartData?.length&&cartData.reduce((tally,cartItem)=>{
    return tally + cartItem.count * cartItem.price
        },0)
return(
    <div className="cartmain">
        <div className="cartwrapper">
        <div className="cartcontent">
            <header className="cartheader">
                <div className="cartheadercount">
                    <p>
                        My Cart ({cartData?.length}) items
                    </p> 
                </div>
                <button className="cartclosebutton" onClick={()=>actions.toggleCart()}>
                    X
                </button>
            </header>
            <div className="cartitemcontainer">
                {cartData&&cartData.length?
                    cartData.map((item)=>{
                        return(
                            <CartItem item={item} actions={actions}/>)
                        }) :
                    <EmptyCart  />
                }
            </div>
            {cartData&&cartData.lenght&&
            <div className="cartbanner">
                <img src="../static/images/lowest-price.png" width="100px" />
                <p>You wont find it cheaper any where</p>
            </div>}

            <footer className="cartfooter">
                <div>
                    <p className="cartpromo">Promo code can be applied on payment page</p> 
                </div>
                <button className="cartpaymentbutton" onClick={()=>actions.toggleCart()}>
                     {cartData&&cartData.length ?`Proceed to checkout Rs.${totalPrice}`: "Start Shopping"}
                </button>
            </footer>
        </div>
        </div>
        </div>
    )
    
}