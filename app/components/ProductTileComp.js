import React from 'react';
import { PRODUCT_LABEL_MSG } from '../constant';
import { images } from './common/Common';
import 'react-responsive-tabs/styles.css';

const ProductTileComp = (props) => {
 const {proItem} = props;
 return (
    <div className="product-details-box" key={proItem.id}>
        <h5>{proItem.name}</h5>
        <div className="product-detail-info">
            <img src={images[proItem.imageURL]} alt={proItem.sku} />
            <p>{proItem.description}</p>
            <div className="price-buy-now">
                <span>{PRODUCT_LABEL_MSG.CURRENCY_TEXT + " " + proItem.price}</span>
                <button className="btn" onClick={() => props.addToCartFunction(proItem)}><span className="desktop-visible">{PRODUCT_LABEL_MSG.BUTTON_TEXT}</span><span className="mobile-visible">{PRODUCT_LABEL_MSG.BUTTON_TEXT_WITH_CURRENCY + proItem.price}</span></button>
            </div>
        </div>
    </div>
 )
}
export default ProductTileComp;
