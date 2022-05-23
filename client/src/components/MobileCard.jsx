import { ADDED_TO_CART } from '../redux/ActionCreators/CartActions';
import { useDispatch, useSelector } from 'react-redux'

const Card = (props) => {

    const product = props.product
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(ADDED_TO_CART(product))
    }

    return (
        <div className="pl-2 card pr-3 " >
            <div className='row'>
                <div className="card-header bg-white col-sm-12">
                    <h4 className='title'> <strong>{product.name.slice(0, 58)}</strong></h4>
                </div>
                <img className="card-img-top pr-0 col-6 " src={product.imageURL} alt={product.name} />
                <div className="card-body col-6 pl-0">
                    <p className="card-text">{product.description}</p>
                    <div className='card-footer mobile-buy col-12 p-0 '>
                        <button className="btn btn-danger w-100" onClick={() => { handleAddToCart(product) }} >Buy Now @ Rs.{product.price}</button>
                    </div>
                </div>
                <div className='card-footer tab-buy col-12 mt-2'>
                    <button className="btn btn-danger w-100" onClick={() => { handleAddToCart(product) }} >Buy Now @ Rs.{product.price}</button>
                </div>
            </div>
        </div>
    )
}

export default Card