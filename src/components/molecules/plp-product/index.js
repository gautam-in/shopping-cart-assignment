import React from "react";
import { object } from 'prop-types';

import Button from "../../atoms/button";
import Heading from "../../atoms/heading";
import Image from "../../atoms/image";
import Paragraph from "../../atoms/paragraph";
import { _BUY_NOW } from "../../../utils/constants";

import './plp-product.scss';

const PlpProduct = ({ product }) => {

    return (
        product ? <div className="plp-product">
            <Heading heading={product.name} title={product.name} />
            <div className="image-desc">
                <Image src={product.imageURL} alt={product.name} />
                <div className="desc" title={product.description}><Paragraph text={product.description} /></div>
            </div>
            <div className="buy-part desktop-only">
                <div>MRP Rs.{product.price}</div>
                <Button label={_BUY_NOW} id={product.id} />
            </div>
            <div className="buy-part-mobile desktop-hidden">
                <Button label={`${_BUY_NOW} @ MRP Rs.${product.price}`} id={product.id} />
            </div>

        </div>
            : <></>
    )
}

PlpProduct.propTypes = {
    product: object
}

export default PlpProduct;