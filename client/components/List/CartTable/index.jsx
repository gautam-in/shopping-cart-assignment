import React from 'react'
import NextImage from 'next/image';
import { Logo } from '../../../lib/Constant'
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
            {data.map(({ c_id, product_name, product_price, total_price, product_count }) => {
                return (
                    <section className="cart-cell" >
                        <NextImage src={Logo} alt={"name"} width={136} height={136} />
                        <div className='right-view'>
                            <h5>{product_name}</h5>
                            <div className='counter'>
                                <PrimaryButton title="-" onClick={() => decreaseCount(c_id)} /> <span> {product_count} </span> <PrimaryButton title="+" onClick={() => increaseCount(c_id)} />
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
