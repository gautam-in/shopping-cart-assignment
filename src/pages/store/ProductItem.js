import React from 'react';
import { Link } from 'react-router-dom';

import CartButtons from '../../components/shared/CartButtons';

const ProductItem = ({product}) => {

  return ( 
    <div className="product-card card-body">
      <div className="card-title">{product.name}</div>
      <div className="card-detail">
        <img className="img-fluid" height="auto" width="100%" src={`./${product.imageURL}?v=${product.id}`} alt=""/>
        <div className="card-desc text-center">
          {product.description}
        </div>
      </div>
      <CartButtons product={product} />
    </div>
  );
};
 
export default ProductItem;