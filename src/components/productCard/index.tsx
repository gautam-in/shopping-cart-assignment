// TODO: Buy Now change
import React, { FC, useCallback, useContext } from 'react';
import get from 'lodash/get';
import { useHistory } from 'react-router-dom';
import AppContext from '../../contexts/appContext/app-context';
import { Product } from '../../services/AppService';
import { CART } from '../../constants/routes';
import './index.scss';

interface ProductCardProps {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const history = useHistory();
    const {
        appState: { cartItems },
        updateCart,
    } = useContext(AppContext);

    const isItemInCart = Boolean(cartItems.find((item) => item.id === get(product, 'id')));

    const handleClick = useCallback(() => {
        isItemInCart ? history.push(CART) : updateCart(product);
    }, [product, isItemInCart, updateCart, history]);

    return (
        <li className="product-cards" id={product.category}>
            <h2 className="product-name truncate">{product.name}</h2>
            <img src={product.imageURL} alt={product.name} className="product-img" />
            <p className="product-desc">{product.description}</p>
            <button className="btn-cta mobile tablet" onClick={handleClick}>
                Buy Now @ Rs. {product.price}
            </button>
            <div className="product-cta-container">
                <span className="product-price">MRP Rs. {product.price}</span>
                <button onClick={handleClick} className="btn-cta">
                    {isItemInCart ? 'Go To Cart' : 'Add To Cart'}
                </button>
            </div>
        </li>
    );
};

export default ProductCard;
