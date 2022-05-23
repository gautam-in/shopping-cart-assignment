import { ADDED_TO_CART } from '../redux/ActionCreators/CartActions';
import { useDispatch, useSelector } from 'react-redux'

const Card = (props) => {


    const product = props.product
    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
        dispatch(ADDED_TO_CART(item))
    }

    return (<div className="card" >
        <div className="card-header bg-white">
            <p className='title'> <strong>{product.name.slice(0, 30)}</strong></p>
        </div>
        <img className="card-img-top p-2" src={product.imageURL} alt={product.name} />
        <div className="card-body">
            <p className="card-text">{product.description.slice(0, 70)} ...</p>
        </div>
        <div className='card-footer bg-white'>
            <div className='row align-products-center'>
                <div className='col-sm-6 p-0'>
                    <small><strong>MRP Rs.{product.price}</strong></small>
                </div>
                <div className='col-sm-6 text-right p-0'>
                    <a className="btn btn-danger" onClick={() => { handleAddToCart(product) }} >Buy Now</a>
                </div>
            </div>

        </div>
    </div>)
}

export default Card