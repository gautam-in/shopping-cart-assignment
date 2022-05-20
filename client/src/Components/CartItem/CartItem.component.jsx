import {CartItemContainer,CartItemImgContainer,CartItemImg,
    CartItemMetaDataContainer,CartItemTitle,CartItemQtyContainer,CartItemQtyUpdater,CartItemMetaData,
    CartItemQty,CartItemPriceContainer,CartItemPrice,CartItemTotalPrice} from './CartItem.styles';

const CartItem = props => {
    return(
        <CartItemContainer>
            <CartItemImgContainer>
                <CartItemImg src='\static\images\products\fruit-n-veg\apple.jpg'/>
            </CartItemImgContainer>

            <CartItemMetaDataContainer>
                <CartItemTitle>Apple - Washington,Regular, 4 pcs </CartItemTitle>
                <CartItemMetaData>
                    <CartItemQtyContainer>
                        <CartItemQtyUpdater>-</CartItemQtyUpdater>
                        <CartItemQty>1</CartItemQty>
                        <CartItemQtyUpdater>+</CartItemQtyUpdater>
                    </CartItemQtyContainer>

                    <CartItemPriceContainer>
                    &#10006;
                    <CartItemPrice>Rs. 187</CartItemPrice>
                    </CartItemPriceContainer>

                    <CartItemTotalPrice>Rs. 187</CartItemTotalPrice>

                </CartItemMetaData>
            </CartItemMetaDataContainer>
        </CartItemContainer>
    )
}

export default CartItem;