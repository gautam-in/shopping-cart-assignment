import ReactDOM  from "react-dom";
import CartItem from "../CartItem/CartItem";
import useGetCartData from "../../HOC/useGetCartData";
import './Cart.scss';


const Cart = ({clickHandler, ...props}) =>{

    const {totalPrice,totalQty} = useGetCartData();

    return ReactDOM.createPortal(
        <div className="cartContainer">
            <div classname="cartContainer_Wrapper">
                <div className="cartContainer_Wrapper_Header">
                    <div className="cartContainer_Wrapper_Header__Title">
                        <h4 className="titleData">My Cart</h4>
                        {totalQty!==0 && <div>({totalQty} Items)</div>}
                    </div>

                    <button className="cartContainer_Wrapper_Header_CloseBtn" onClick={clickHandler}>
                        &#10006;
                    </button>
                </div>

                <div className="cartContainer_Wrapper_Body">
                    
                    {totalQty!==0 ? (
                        <>
                        <CartItem />
                
                        <div className="cartContainer_Wrapper_Body_PlaceHolder">
                                <div className="ImgContainer">
                                    <img src='\static\images\lowest-price.png'/>
                                </div>
                                <h4 className="ImgText">You won't find it cheaper anywhere</h4>
                        </div>
                    </>
                    ) : (
                        <div className="cartContainer_Wrapper_Body_Empty">
                            <div className="emptyPlaceHolder">
                                <h3 className="emptyPlaceHolder_Title">No Items in your Cart</h3>
                                <p className="emptyPlaceHolder_Para">Your Favourite items are just a click away</p>
                            </div>
                        </div>)}

                </div>
                    
                <div classname="cartContainer_Wrapper_Checkout">
                    {totalQty!== 0 ? (
                        <>
                        <h5 className="cartContainer_Wrapper_Checkout_Title">Promo code can be applied on payment page</h5>
                        <button className="cartContainer_Wrapper_Checkout_Button">
                            <h4>Proceed to Checkout</h4>
                            <p className="checkoutPara">Rs{totalPrice} <span>{'>'}</span></p>
                        </button>
                        </>
                    ) : (
                        <button className="cartContainer_Wrapper_Checkout_Button">
                            <h4>Start Shopping</h4>
                        </button>
                    )}
                </div>
            </div>
        </div>,
        document.getElementById('cart')
    ) 
}

export default Cart;

// import ReactDOM  from "react-dom";
// import CartItem from "../CartItem/CartItem";
// import useGetCartData from "../../HOC/useGetCartData";
// import './Cart.scss';


// const Cart = ({clickHandler,...props}) =>{

//     const {totalPrice,totalQty} = useGetCartData();

//     return ReactDOM.createPortal(
//         <div classname="cartContainerComponent">
//             <div className="cartComponent">
//                 <div className="cartHeader">
//                     <div className="cartHeaderTitleContainer">
//                         <h4 className="cartTitle">My Cart</h4>
//                         {totalQty!==0 && <div>({totalQty} Items)</div>}
//                     </div>

//                     <div className="cartHeaderCloseBtnContainer" onClick={clickHandler}>
//                         &#10006;
//                     </div>
//                 </div>

//                 <div className="cartItemsContainer">

//                     {totalQty!==0 ? (
//                         <>
//                         <CartItem />

//                         <div className="cartItemsPlaceholder">
//                                 <div className="cartItemsPlaceholderImageContainer">
//                                     <img className="cartPlaceholderItemsImage" src='\static\images\lowest-price.png'/>
//                                 </div>
//                                 <h4 className="CartItemsPlaceholderText">You won't find it cheaper anywhere</h4>
//                         </div>
//                     </>
//                     ) : (
//                         <div className="cartEmptyContainer">
//                             <div className="cartEmptyPlaceholder">
//                                 <h3 className="cartEmptyTitle">No Items in your Cart</h3>
//                                 <p className="cartEmptySubtitle">Your Favourite items are just a click away</p>
//                             </div>
//                         </div >)}

//                 </div>

//                 <div className="cartCheckoutContainer">
//                     {totalQty!== 0 ? (
//                         <>
//                             <h5 className="cartCheckoutText">Promo code can be applied on payment page</h5>
//                         <button className="cartCheckoutButton">
//                             <h4>Proceed to Checkout</h4>
//                             <p className="cartCheckoutButtonPrice">Rs{totalPrice} <span>{'>'}</span></p>
//                         </button>
//                         </>
//                     ) : (
//                         <button className="cartCheckoutButton">
//                             <h4>Start Shopping</h4>
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </div>,
//         document.getElementById('cart')
//     ) 
// }

// export default Cart;