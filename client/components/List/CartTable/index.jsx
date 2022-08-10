import React from 'react'
import NextImage from 'next/image';
import { PrimaryButton } from '../../Button'
import { addCountCartIndex, removeCountCartIndex } from '../../../lib/indexDB';
import { useContext } from 'react';
import { CartContext } from '../../../Context/cart-state';

export default function CartTable({ data = [] }) {
    const context = useContext(CartContext)

    const increaseCount = (c_id) => {
        addCountCartIndex(c_id)
        context.increaseCartCount()
    }

    const decreaseCount = (c_id) => {
        removeCountCartIndex(c_id)
        context.decreaseCartCount()
    }

    return (
        <section>
            {data.map(({ c_id, product_name, product_img, product_price, total_price, product_count }) => {
                return (
                    <section className="cart-cell" >
                        <NextImage src={product_img} alt={"name"} width={136} height={136} />
                        <div className='right-view'>
                            <h5>{product_name}</h5>
                            <div className='counter'>
                                <PrimaryButton onClick={() => decreaseCount(c_id)}>-</PrimaryButton>
                                <span> {product_count} </span> <PrimaryButton onClick={() => increaseCount(c_id)}>+</PrimaryButton>
                                <span> X </span>
                                <span> RS. {product_price} </span>
                                <b> RS. {total_price} </b>
                            </div>
                        </div>
                    </section>
                )
            })}
        </section>

    )
}
