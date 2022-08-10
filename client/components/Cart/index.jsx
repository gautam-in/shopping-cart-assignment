import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import CartTable from '../List/CartTable';
import { PrimaryButton } from '../Button';

export default function Cart({ data = [], onHide = () => { }, onProceed = () => { } }) {
    const isCartEmpty = data.length <= 0

    return (
        <section className='overlay'>
            <div className='cart'>
                <div className='header'>
                    <span>{`My Cart (${data.length} Items)`}</span>
                    <button onClick={onHide}>X</button>
                </div>
                <div className='body'>
                    {isCartEmpty
                        ?
                        <section className='empty-cart'>
                            <h3>No Items in your cart</h3>
                            <span>Your favourite items are just a click away</span>
                        </section>
                        :
                        <CartTable data={data} />
                    }
                </div>
                <PrimaryButton onClick={onProceed} className='btn-checkout'>{isCartEmpty ? `Start Shopping` : `Proceed to Checkout`}</PrimaryButton>
            </div>
        </section>
    )


}