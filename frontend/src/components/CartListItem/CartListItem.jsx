import React from 'react'
import { CartListItemWrapper, ItemCalcButton, ItemImage, ItemInfo, ItemInfoWrapper, ItemName, ItemQuantityWrapper, ItemTotalPrice } from './CartListItem.styled'
import { useDispatch } from 'react-redux';
import { handleCartQuantity } from '../../store/cart/cartSlice';

const CartListItem = ({ id, name, imageURL, price, quantity }) => {
    const dispatch = useDispatch();

    const handleItemCalculation = (type) => {
        const obj = { id, type }
        dispatch(handleCartQuantity(obj));
    }

    return (
        <CartListItemWrapper>
            <ItemInfoWrapper>
                <ItemImage src={imageURL} alt={name} />
                <ItemInfo>
                    <ItemName><strong>{name}</strong></ItemName>
                    <ItemQuantityWrapper>
                        <ItemCalcButton aria-label={`Item Quantity Decrease`} onClick={() => handleItemCalculation('remove-one')}>−</ItemCalcButton>
                        <span>{quantity}</span>
                        <ItemCalcButton aria-label={`Item Quantity Increase`} onClick={() => handleItemCalculation('add-one')}>+</ItemCalcButton>
                        <span>X</span>
                        <span>{price}</span>
                    </ItemQuantityWrapper>
                </ItemInfo>
            </ItemInfoWrapper>
            <ItemTotalPrice aria-label={`Total Item Price`}>Rs.{price * quantity}</ItemTotalPrice>
        </CartListItemWrapper>
    )
}

export default CartListItem