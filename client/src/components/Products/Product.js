import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateCartItems, postToCart, CartTotalItems } from "../../features/cart/CartSlice"


const Product = ({ product }) => {
    const dispatch = useDispatch()
    const [addToCartLabel, setAddToCartLabel] = React.useState(false)
    const { cartUpdate, cartOpen } = useSelector(state => state.CartReducer)
    const handleBuyNow = (itemToAdd) => {
        setAddToCartLabel(true)

        dispatch(postToCart())
        if (cartUpdate.data) {
            dispatch(updateCartItems(itemToAdd))
        }

    }


    console.log("ddddddd",product)


    return (<>
        <div  className={cartOpen ? "productItem_cart_active" : "productItem"} >
            <img src={product?.imageURL} alt={product?.name} />

            <div className="metadata">

                <p className="product_description">{product?.description}</p>

                <div className="product_metadata">

                    <div className="price">{`MRP Rs. ${product?.price}`}</div>
                    {addToCartLabel ? <div className="added_to_cart">Added</div> : <button className="buynow_btn" onClick={() => handleBuyNow(product)}>BuyNow</button>}

                </div>

                <div className="mobileview_product_metadeta">
                    {addToCartLabel? 
                    <div className="added_to_cart">Added</div> :<button className="buynow_btn" onClick={() => handleBuyNow(product)}>{`Buy Now @ Rs.${product?.price} `}</button>}

                </div>
            </div>


        </div>
    </>)

}

export default Product