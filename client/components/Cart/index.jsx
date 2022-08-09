import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import CartTable from '../List/CartTable';
import { PrimaryButton } from '../Button';

export default function Cart({ data = [], onHide = () => { }, onProceed = () => { } }) {
    return (
        <section className='overlay'>
            <div className='cart'>
                <div className='header'>
                    <span>{`My Cart (${data.length} Items)`}</span>
                    <button onClick={onHide}>X</button>
                </div>
                <div className='body'>
                    <CartTable data={data} />
                </div>
                <PrimaryButton onClick={onProceed} title="Proceed to Checkout" className='btn-checkout' />
            </div>
        </section>
    )


}