import { Card } from 'react-bootstrap';
import { addCart } from "../../store/actions/cart.action";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
    const { name, imageURL, description, price } = product;
    const dispatch = useDispatch();
    const buyProduct = () => {
        dispatch(addCart(product))
    }
    return (
        <div className='product'>
            <Card >
                <div className='title'>{name}</div>
                <div className='card-data'>
                    <Card.Img variant="top" src={imageURL} alt={name} />
                    <Card.Body>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <div className='card-footer'>
                            <div className='price'>MRP Rs.{price}</div>
                            <button className='btn-cls' onClick={buyProduct}>Buy now</button>
                        </div> 
                    </Card.Body>
                </div>
            </Card>

        </div>
    );
}

export default ProductCard;
