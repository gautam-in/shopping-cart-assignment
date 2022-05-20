import Button from '../button';
import productImg from '../../static/images/products/bakery-cakes-dairy/paneer.jpg';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './product-card.scss';
const ProductCard = ({product}) => {
    const {name, imageUrl, description, price} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);
    return (
        <div className="product-card">
            <h3 className="product-card-title">{name}</h3>
            <div className='product-card__details'>
                <div className="product-card__img-container">
                    <img className="product-card-img"src={productImg} alt=""/>
                </div>
                <p className="product-card-desc">{description}</p>
            </div>
            <div className='product-card__footer'>
                <span className="product-card-msrp">MSRP Rs{price}</span>
                <Button onClick ={addProductToCart} btnClass={'product-card-button'} type='button'>Buy Now</Button>
            </div>
        </div>
    );
}

export default ProductCard;