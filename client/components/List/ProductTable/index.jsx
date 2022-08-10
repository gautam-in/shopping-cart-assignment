import React from 'react'
import NextImage from 'next/image';
import { addToCart } from '../../../lib/AJAX'
import { addCountCartIndex, addProductCartIndex, RetreiveCartIndex, updateCartIndex } from '../../../lib/indexDB'
import { PrimaryButton } from '../../Button'
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useContext } from 'react';
import { CartContext } from '../../../Context/cart-state';

export default function ProductTable({ products = [] }) {
    let { isMobile } = useWindowSize()
    const context = useContext(CartContext)

    const onBuyNow = async (product) => {
        let { id, name, imageURL, price } = product

        await addToCart(id)
        context.increaseCartCount()

        RetreiveCartIndex(id, (data) => {
            if (data) {
                addCountCartIndex(id)
            } else {
                let cartObj = {
                    c_id: id,
                    product_name: name,
                    product_img: imageURL,
                    product_price: price,
                    product_count: 1,
                    total_price: price
                }
                addProductCartIndex(cartObj)
            }
        })
    }

    return (
        <section className='product-list-container'>
            {products.length <= 0
                ?
                <div className="not-found">No Products found!</div>
                :
                products?.map((product, idx) => {
                    let { name, imageURL, price, description } = product
                    return (
                        <div key={`prod_${idx}`} className='product-cell'>
                            <h5>{name}</h5>
                            <div className="product-mobile">
                                <NextImage src={imageURL} alt={name} width={310} height={236} />
                                <section className='desc-view'>
                                    <p>{description}</p>
                                    {isMobile ?
                                        <PrimaryButton className='buy-now' title={`Buy Now @ RS.${price}`} onClick={() => onBuyNow(product)}></PrimaryButton>
                                        :
                                        <div className='price-view'>
                                            <span>MRP RS. <b>{price}</b></span>
                                            <PrimaryButton className='buy-now' onClick={() => onBuyNow(product)}>{"Buy Now"}</PrimaryButton>
                                        </div>}
                                </section>
                            </div>
                        </div>
                    )
                })}
        </section >
    )
}
