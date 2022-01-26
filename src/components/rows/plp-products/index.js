import React from "react";
import { connect } from "react-redux";
import PlpProduct from "../../molecules/plp-product";
import { addToCartAction } from "../../../redux/actions";

import './plp-products.scss';

const PlpProducts = ({ products, addToCart }) => {

    let requiredFormat = {};

    if (products.length > 0) {
        products.forEach(product => {
            requiredFormat[product.id] = product;
        });
    }

    const onProductSelect = (e) => {
        addToCart(e.target.id, { ...requiredFormat[e.target.id], count: 1 });
    }

    return (
        products && products.length > 0 ?
            <div className="plp-products" onClick={onProductSelect}>{
                products.map(product => <PlpProduct product={product} key={product.id} />)
            }</div>
            : <></>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id, cartItem) => dispatch(addToCartAction(id, cartItem))
})

export default connect(null, mapDispatchToProps)(PlpProducts);