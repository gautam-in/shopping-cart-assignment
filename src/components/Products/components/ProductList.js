import React from 'react'
import { MediaURL } from '../../../Utils/httpServices'


function ProductList(props) {
    const { list, onBuyNow } = props
    return (
        <div className='product-item-component'>
            {
                list.length > 0 ?
                    list.map((item) => (
                        <div key={item.id} className='product-item-container'>

                            <h4>{item.name}</h4>
                            <div className='product-item-details'>
                                <div className='catgImageContainer'>
                                    <img src={MediaURL + item.imageURL} alt={item.imageURL} />
                                </div>

                                <div className='product-item-info'>

                                    <span>{(item.description).substr(0, 100) + ((item.description.length > 100) ? '...' : '')}</span>

                                    <div className='price-container'>
                                        <span className='mrp-price'>MRP Rs.{item.price}</span>
                                        <button className='buy-button' onClick={() => onBuyNow(item)}>Buy Now<span className="butt-span">&nbsp;at Rs.{item.price}</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <p>No products found</p>
            }
        </div>
    )
}

export default ProductList