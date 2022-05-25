import Button from '../button';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './product-card.scss';
const ProductCard = ({product}) => {
    const {name, imageURL, description, price} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);
    return (
        <div className="product-card">
            <div className='product-card__details'>
                <h3 className="product-card-title">{name}</h3>
                <div className='product-card__desc-container'>
                    <div className="product-card__img-container">
                        <img className="product-card-img"src={require(`../../../src${imageURL}`)} alt=""/>
                    </div>
                    <p className="product-card-desc">{description}</p>
                </div>
            </div>
            <div className='product-card__footer'>
                <span className="product-card-msrp">MSRP Rs{price}</span>
                <Button onClick ={addProductToCart} btnClass={'product-card-button'} type='button'>Buy Now</Button>
            </div>
        </div>
    );
}

export default ProductCard;