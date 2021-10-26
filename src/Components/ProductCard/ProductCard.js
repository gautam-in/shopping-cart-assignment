import { useDispatch } from "react-redux";
import useMedia from "../../Hooks/useMedia";
import { updateCart } from "../../Store/actions/cart";
import { PRICE_STYLE, PRODUCT_CARD, PRODUCT_CARD_WRAPPER, PRODUCT_DESCRIPTION, PRODUCT_HEADING, PRODUCT_IMG, PRODUCT_PURCHASE_STYLE, PURCHASE_BUTTON } from "../../Styles/ProductStyles";

export default function ProductCard({product}){
    const dispatch = useDispatch();
    const isMobile = useMedia("(max-width: 480px)");
    const isTab = useMedia("(min-width:481px) and (max-width: 768px)");
    return (
        <PRODUCT_CARD>
        <PRODUCT_CARD_WRAPPER>
            <PRODUCT_HEADING>{product.name}</PRODUCT_HEADING>
            <PRODUCT_IMG src={product.imageURL} alt={product.name}></PRODUCT_IMG>
            <PRODUCT_DESCRIPTION>{product.description}</PRODUCT_DESCRIPTION>
            <PRODUCT_PURCHASE_STYLE>
                {!isMobile && !isTab && <PRICE_STYLE>MRP Rs {product.price}</PRICE_STYLE>}
                <PURCHASE_BUTTON type='button' onClick={()=>{
                    dispatch(updateCart(product.id, 'add'))
                    }}>Buy Now {isMobile || isTab && `@ Rs ${product.price}`}</PURCHASE_BUTTON>
            </PRODUCT_PURCHASE_STYLE>
        </PRODUCT_CARD_WRAPPER>
        </PRODUCT_CARD>
    )
}