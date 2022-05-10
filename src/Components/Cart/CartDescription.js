import { useDispatch, useSelector } from "react-redux";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";
import { addQuantity, reduceQuantity } from "../../Redux/Reducers/CartSlice";
import "./CartDescription.css"

const CartDescription = () => {

    const data = useSelector(state => state.cart.items);
    const totalPrice = useSelector(state => state.cart.totalAmount);
    // const quantity = useSelector(state=>state.cart.items);
    const dispatch = useDispatch();
    return (
        <>
            <div className="cartTop">
                {data && data.length>0? data.map(item => (
                    <>
                    <div className="cartItem">
                        <img src={item.data.imageURL} width={80} />
                        <div style={{ display: "flex", flexDirection: "column" ,flexWrap:"wrap"}}>
                            <h3>{item.data.name}</h3>
                            <div style={{ display: "flex", flexDirection: "row" ,flexWrap:"wrap"}}>
                                <button onClick={() => dispatch(reduceQuantity(item.id))} style={{ border: "none", marginLeft: "7px", color: "white", width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#d00256" }}>
                                    -
                                </button>
                                <span style={{ marginLeft: "7px" }}>{item.quantity}</span>
                                <button onClick={() => dispatch(addQuantity(item.id))} style={{ border: "none", marginLeft: "7px", color: "white", width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#d00256" }}>
                                    +
                                </button>

                                <span
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        flex: 1,
                                        padding: "0 8px",
                                        flexWrap:"wrap"
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        width={24}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>{" "}
                                    <span style={{ marginLeft: "7px" }}>  Rs.{item.data.price}</span>
                                </span>
                                <span style={{ float: "right" }}>  Rs.{item.totalAmountPerItem}</span>
                            </div>
                        </div>

                    </div>
                    <div
                    style={{
                        display: "flex",
                        backgroundColor: "#fff",
                        alignItems: "center",
                        padding: "10px",
                        margin: "8px",
                        flexWrap:"wrap"
                    }}
                >
                    <img src="static/images/lowest-price.png" height={35} />
                    <p style={{ marginLeft: 16 }}>You won't find it cheaper anywhere</p>
                </div>

                <div
                    style={{
                        display: "flex",
                        backgroundColor: "#fff",
                        alignItems: "center",
                        padding: "10px",
                        margin: "8px",
                        flexDirection: "column"
                    }}
                >

                    <p style={{ marginLeft: 7 }}>Promo code can be applied on payment page</p>
                    <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#d00256", width: "95%", justifyContent: "space-between", padding: "12px", color: "white", fontWeight: "700", marginBottom: "8px" }}>
                        <p>Proceed to checkout</p>
                        <span style={{ marginTop: "15px" }}>  Rs.{totalPrice}</span>
                    </div>
                </div>
                </>
                )):<>
                <div className="emptyCart">
                    <span>No items in your cart</span>
                    <span>Your favourite items are just a click away</span>
                </div>
                <div className="startShoppingButton">Start Shopping</div>
                </>}
                
            </div>
        </>
    )
}

export default CartDescription;