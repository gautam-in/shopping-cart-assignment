import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { ADDED_TO_CART } from '../redux/Action_creators/CartActions';

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const navigate = useNavigate()
  const handleAddToCart = (item) => {
    dispatch(ADDED_TO_CART(item))
  }

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  }

  return (
    <div id='product_list'>
      <div className='row align-items-center'>
        {
          products.map((item, i) => (
            <div key={item.id} className='col-md-3 p-0 pl-2 mb-3'>
              <div className="card" onClick={() => { handleClick(item.id) }}>
                <div className="card-header bg-white">
                  <p className='title'> <strong>{item.name.slice(0, 58)}</strong></p>
                </div>
                <img className="card-img-top p-2" src={item.imageURL} alt={item.name} />
                <div className="card-body">
                  <p className="card-text">{item.description}</p>
                </div>
                <div className='card-footer bg-white'>
                  <div className='row align-items-center'>
                    <div className='col-sm-6'>
                      <small><strong>MRP Rs.{item.price}</strong></small>
                    </div>
                    {/* <div className='col-sm-6 text-right'>
                      <a className="btn btn-danger" onClick={() => { handleAddToCart(item) }} >Buy Now</a>
                    </div> */}
                  </div>

                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductsList