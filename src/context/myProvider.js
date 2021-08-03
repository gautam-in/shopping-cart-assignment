import { useState } from 'react';
import MyContext from './myContext';

export default function MyProvider(props) {
    const [context, setContext] = useState({
        categories: [],
        products: [],
        cart: []
    });

    const setProducts = (products) => {
        setContext(prev => ({ ...prev, products }));
    }

    const setCategories = (categories) => {
        setContext(prev => ({ ...prev, categories }));
    }

    const addProductToCart = (product) => {

        let flag = 0;
        let currentCart = context.cart;

        currentCart.map(item => {
            if (item.id === product.id) {
                flag = 1;
                return {
                    ...item,
                    quantity: item.quantity + 1,
                    totalValue: (item.quantity + 1) * item.price
                }
            }
        });

        if (flag === 0) {
            currentCart.push({ ...product, quantity: 1, totalValue: product.price })
        }

        setContext(prev => ({ ...prev, cart: currentCart }));
    }

    const removeProductFromCart = (product) => {

        let filteredCart = context.cart.filter(item => item.id !== product.id);

        setContext(prev => ({ ...prev, cart: filteredCart }));
    }

    return (
        <MyContext.Provider
            value={{
                context,
                setProducts,
                setCategories,
                addProductToCart,
                removeProductFromCart
            }}
        >
            {props.children}
        </MyContext.Provider>
    );
}