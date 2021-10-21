import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartSection from '../../Components/CartSection/CartSection';
import { countTotalItems, countTotalPrice } from '../../Helpers/cartPrice';
import useProducts from '../../Hooks/useProducts';
import { toggleCart } from '../../Redux/actions/cart';
import {
    CartPageWrapper, CartPageHeader, CartItemsWrapper, CartPageDiscountWrapper, CartPageFooterContent,
    CartPageMessage, NoItemInCart, CartPageFooterWrapper
} from './CartElements';

export default function CartPage({ header }) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const { handleProduct } = useProducts();
    const totalItems = countTotalItems(cartItems);
    const totalPrice = countTotalPrice(cartItems);

    return (
        <>
            <CartPageWrapper>
                {!header && <CartPageHeader>{`My Cart(${totalItems} items)`}</CartPageHeader>}
                {
                    totalItems > 0 &&
                    <>
                        <CartItemsWrapper>
                            {
                                (cartItems || []).map(item => {
                                    return <CartSection key={item.id} {...item} />
                                })
                            }
                        </CartItemsWrapper>
                        <CartPageDiscountWrapper>
                            <img src='static/images/lowest-price.png' alt='cart-image' />
                            <CartPageMessage>You won't find it cheaper anywhere</CartPageMessage>
                        </CartPageDiscountWrapper>
                    </>
                }
            </CartPageWrapper>
            {totalItems < 1 &&
                <NoItemInCart>
                    <CartPageMessage bold={true} >No items in your cart</CartPageMessage>
                    <CartPageMessage>Your favourite items are just a click away</CartPageMessage>
                </NoItemInCart>
            }
            <CartPageFooterWrapper>
                {totalItems > 0 && <CartPageMessage>Promo code can be applied on payment page</CartPageMessage>}
                <CartPageFooterContent>
                    {totalItems > 0 ?
                        <>
                            <CartPageMessage onClick={() => { handleProduct(); dispatch(toggleCart(false)) }}>Proceed to Checkout</CartPageMessage>
                            <CartPageMessage>{`Rs. ${totalPrice}`}</CartPageMessage>
                        </>
                        : <CartPageMessage onClick={() => { handleProduct(); dispatch(toggleCart(false)) }}>Start Shopping</CartPageMessage>
                    }
                </CartPageFooterContent>
            </CartPageFooterWrapper>

        </>
    )
}