import { useLocalStorage } from '../../../hooks/useLocalStorage';
import Button from '../../elements/button';
import { priceCTAConatiner, productCTA, productCardDescription, productPrice, productcardContainer } from './style';

const ProductCard = ({ products }) => {
    const [cart, setCart] = useLocalStorage('cart');

    const handleBuyProduct = (product) => {

        let y = [...cart, { ...product }];
        setCart(y);

    }
    return (products?.map(item =>
        <div style={productcardContainer}>
            <h4>{item.name}</h4>
            <img
                height='100'
                width='90%'
                alt={item.name}
                src={item.imageURL} />
            <div style={productCardDescription}>{item.description}</div>
            <div style={priceCTAConatiner}>
                <div style={
                    productPrice}>{`MRP Rs. ${item.price}`}</div>
                <Button style={productCTA} value='Buy Now' onClick={() => handleBuyProduct(item)} />
            </div>
        </div>))
}

export default ProductCard;