import React from "react";
import { _BUY_NOW } from "../../../utils/constants";
import Button from "../../atoms/button";
import Heading from "../../atoms/heading";
import Image from "../../atoms/image";
import Paragraph from "../../atoms/paragraph";

import './plp-product.scss';


const PlpProduct = ({ product }) => {


    // category: "5b6899953d1a866534f516e2"
    // description: "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds."
    // id: "5b6c6a7f01a7c38429530883"
    // imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg"
    // name: "Fresho Kiwi - Green, 3 pcs"
    // price: 87
    // sku: "fnw-kiwi-3"
    // stock: 50


    return (
        product ? <div className="plp-product">
            <Heading heading={product.name} title={product.name} />
            <div className="image-desc">
                <Image src={product.imageURL} alt={product.name} />
                <div className="desc" title={product.description}><Paragraph text={product.description} /></div>
            </div>
            <div className="buy-part desktop-only">
                <div>MRP Rs.{product.price}</div>
                <Button label={_BUY_NOW} id={product.id}/>
            </div>
            <div className="buy-part-mobile desktop-hidden">
                <Button label={`${_BUY_NOW} @ MRP Rs.${product.price}`} id={product.id} />
            </div>

        </div>
            : <></>
    )
}

export default PlpProduct;