import { useDispatch } from "react-redux";
import CustomButton from "../atom/CustomButton";
import {CartItemStyle,ProductDetail,ProductQuantityDetail,ProductQuantity} from "../styles/cartItemStyle";
import { addToShipping, deleteFromShipping } from "../../redux/actions";

export default function CartItem({addedProduct}){
    const dispatch = useDispatch();
    return (
        <CartItemStyle>
            <img src={addedProduct.imageURL } alt={addedProduct.name} />
            <ProductDetail>
                <h4>{addedProduct.name}</h4>
                <ProductQuantityDetail>
                 <ProductQuantity>  
                <CustomButton classes={'counter-btn'} text={`-`} clickHandler={()=>dispatch(deleteFromShipping(addedProduct))}></CustomButton>
                <span>{addedProduct.quantity}</span>
                <CustomButton classes={'counter-btn'} text={`+`}  clickHandler={()=>dispatch(addToShipping(addedProduct))}></CustomButton>
                <span>&times;</span>
                <span>{addedProduct.price}</span>
                </ProductQuantity> 
                <p>Rs. {addedProduct.totalPrice}</p>
                </ProductQuantityDetail>
            </ProductDetail>
        </CartItemStyle>
    )
    
}