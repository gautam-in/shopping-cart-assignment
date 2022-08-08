import React from 'react'
import NextImage from 'next/image';
import { addToCart } from '../../../lib/AJAX'
import { addCartIndex, RetreiveCartIndex, updateCartIndex } from '../../../lib/indexDB'
import { PrimaryButton } from '../../Button'
import { Logo } from '../../../lib/Constant';
import { useWindowSize } from '../../../hooks/useWindowSize';

export default function ProductTable({ products = [] }) {
    let { isMobile } = useWindowSize()

    const onBuyNow = async (product) => {
        let { id, name, imageURL, price } = product

        let res = await addToCart(id)
        // alert(res?.responseMessage)

        RetreiveCartIndex(id, (data) => {
            if (data) {
                updateCartIndex(id)
            } else {
                let cartObj = {
                    c_id: id,
                    product_name: name,
                    product_img: imageURL,
                    product_price: price,
                    product_count: 1,
                    total_price: price
                }
                addCartIndex(cartObj)
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
                            <div class="product-mobile">
                                <NextImage src={Logo} alt={name} width={596} height={196} />
                                <section className='desc-view'>
                                    <p>{description}</p>
                                    {isMobile ?
                                        <PrimaryButton className='buy-now' title={`Buy Now @ RS.${price}`} onClick={() => onBuyNow(product)}></PrimaryButton>
                                        :
                                        <div className='price-view'>
                                            <span>MRP RS. <b>{price}</b></span>
                                            <PrimaryButton className='buy-now' title={"Buy Now"} onClick={() => onBuyNow(product)}></PrimaryButton>
                                        </div>}
                                </section>
                            </div>
                        </div>
                    )
                })}
        </section >
    )
}
