
import Button from '../../ui/elements/button'
import CartItem from '../../ui/components/cart-item';
import { exploreButton } from '../../common/style';

export const cartContainer = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'flex-start',
    backgroundColor: 'gray'
}

export const cartElementContainer = {
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    height: '110px',
    backgroundColor: '#fff',
    margin: '5px 0'
};

export const checkoutContainer = {
    display: 'flex',
    width: '45%',
    position: 'fixed',
    bottom: 50
}

const Cart = () => {

    return (<div style={cartContainer}>
        <div style={cartElementContainer}>
            <h3>My Cart</h3>
            <p>(1 items)</p>
        </div>
        <div style={cartElementContainer}>
            <CartItem cartItem={{
                "name": "Fresho Kiwi - Green, 3 pcs",
                "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
                "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
                "price": 87,
                "stock": 50,
                "category": "5b6899953d1a866534f516e2",
                "sku": "fnw-kiwi-3",
                "id": "5b6c6a7f01a7c38429530883"
            }} />
        </div>
        <div style={cartElementContainer}>
            <img alt='promo' width='20%' height='50' src='/static/images/lowest-price.png' />
            <p>You won't find it cheaper anywhere</p>
        </div>
        <div style={checkoutContainer}>
            <Button style={exploreButton} value='Proceed to checkout' />
        </div>
    </div>)
}

export default Cart;