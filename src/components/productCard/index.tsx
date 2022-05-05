// TODO: Buy Now change
import React, { FC, useCallback, useContext } from 'react';
import AppContext from '../../contexts/appContext/app-context';
import { Product } from '../../services/AppService';
import './index.scss';

interface ProductCardProps {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const { updateCart } = useContext(AppContext);

    const handleClick = useCallback(() => {
        updateCart(product);
    }, [product, updateCart]);

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
                    Buy Now
                </button>
            </div>
        </li>
    );
};

export default ProductCard;
