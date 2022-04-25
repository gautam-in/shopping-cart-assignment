import React from 'react';
import EmptyCart from './EmptyCart';
import CartWithProducts from './CartWithProducts';



const CartModal = ({totalItems, cartInfo, onClick}) => {
    return (
     <>
        {totalItems === 0 ? <EmptyCart onClick={onClick}/> : <CartWithProducts totalItems={totalItems} cartInfo={cartInfo} onClick={onClick}/>}
     </>
    )
}


export default CartModal;