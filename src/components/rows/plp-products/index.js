import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlpProduct from "../../molecules/plp-product";
import { addToCartAction, showModal } from "../../../redux/actions";

import './plp-products.scss';
import Modal from "../../atoms/modal";
import { _PRODUCT_ADDED } from "../../../utils/constants";

const PlpProducts = ({ products }) => {

    let requiredFormat = {};
    const dispatch = useDispatch();
    const { modalValue } = useSelector((state) => state);

    const handleModal = (e) => {
        dispatch(showModal(!modalValue));
        e.stopPropagation();
    }

    if (products.length > 0) {
        products.forEach(product => {
            requiredFormat[product.id] = product;
        });
    }

    const onProductSelect = (e) => {
        if(e.target && e.target.id) {
            dispatch(addToCartAction(e.target.id, { ...requiredFormat[e.target.id], count: 1 }, !modalValue));
        }
    }

    return (
        products && products.length > 0 ?
            <div className="plp-products" onClick={onProductSelect}>{
                products.map(product => <PlpProduct product={product} key={product.id} />)
            }
            <Modal handleClose={handleModal} show={modalValue}><div>{_PRODUCT_ADDED}</div></Modal>
            </div>
            : <></>
    )
}

export default PlpProducts;