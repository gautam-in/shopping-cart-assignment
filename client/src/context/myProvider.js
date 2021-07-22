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

    return (
        <MyContext.Provider
            value={{
                context,
                setProducts
            }}
        >
            {props.children}
        </MyContext.Provider>
    );
}