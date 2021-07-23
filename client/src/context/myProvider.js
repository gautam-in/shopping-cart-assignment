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

    return (
        <MyContext.Provider
            value={{
                context,
                setProducts,
                setCategories
            }}
        >
            {props.children}
        </MyContext.Provider>
    );
}