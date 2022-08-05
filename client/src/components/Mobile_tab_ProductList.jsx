import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { ADDED_TO_CART } from '../redux/Action_creators/CartActions';

const MobileTabProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const navigate = useNavigate();
  const handleAddToCart = (item) => {
    dispatch(ADDED_TO_CART(item))
  }
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  }
  return (
    <div id='product_list' className='container'>
      <div className='row align-items-center'>
        {
          products.map((item, i) => (
            <div key={item.id} className='col-12 p-1 col-sm-6  mb-3'>
              <div className="pl-2 card pr-3 " >
                <div className='row' onClick={() => { handleClick(item.id) }}>
                  <div className="card-header bg-white col-sm-12">
                    <h4 className='title'> <strong>{item.name.slice(0, 58)}</strong></h4>
                  </div>
                  <img className="card-img-top pr-0 col-6 " src={item.imageURL} alt={item.name} />
                  <div className="card-body col-6 pl-0">
                    <p className="card-text">{item.description}</p>
                    <div className='card-footer mobile-buy col-12 p-0 '>
                      {/* <button className="btn btn-danger w-100" onClick={()=>{handleAddToCart(item)}} >Buy Now @ Rs.{item.price}</button>                  */}
                    </div>
                  </div>
                  <div className='card-footer tab-buy col-12 mt-2'>
                    {/* <button className="btn btn-danger w-100" onClick={()=>{handleAddToCart(item)}} >Buy Now @ Rs.{item.price}</button>                  */}
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

export default MobileTabProductsList