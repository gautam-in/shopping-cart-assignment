import React, { useContext, useEffect } from 'react'
import Drawer from '@mui/material/Drawer'
import './cart.scss'
import { GlobalContext } from '../../provider/GlobalProvider'

export default function Cart() {
    const { cart, setOpenCart, updateCart } = useContext(GlobalContext)
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [])
    const total = cart?.reduce((acc, el) => acc + (el.price * el.quantity), 0)
    const proceedToCheckout = () => {
        setOpenCart(false)
    }
    return (
        <>
            <Drawer className='cart' anchor='right' open={true} variant='persistent'
            >
                <div className='flex bg-white lg:bg-black px-4 py-6 font-bold  text-black lg:text-white'>
                    <h1 className='flex-grow'>My Cart</h1>
                    <button aria-label='close cart' onClick={() => setOpenCart(false)}>&times;</button>
                </div>
                {
                    !!cart.length &&
                    <div className='flex flex-col h-full'>
                        <div className='flex-grow overflow-auto'>
                            {
                                cart?.map((item, index) => {
                                    const subTotal = item.price * item.quantity
                                    return (
                                        <div key={index} className="flex gap-4 my-4 items-center bg-white">
                                            <img src={item?.imageURL} className='w-[50px] md:w-[100px]' alt={item?.name} />
                                            <div className='flex-grow py-3'>
                                                <h4 className='font-bold'>{item?.name}</h4>
                                                <div className='flex mt-2 gap-4'>
                                                    <button onClick={() => updateCart(item, 'SUB')} aria-label='remove one' className=' bg-primary rounded-full text-white h-6 w-6' >-</button>
                                                    <h4 className='font-semibold' aria-hidden>{item?.quantity}</h4>
                                                    <button onClick={() => updateCart(item, 'ADD')} aria-label='add one more' className=' bg-primary rounded-full text-white h-6 w-6' >+</button>
                                                    <h4 aria-label={`${item.quantity} * ${item?.price}`}> X {item?.price}</h4>
                                                </div>
                                            </div>
                                            <h6 className='mr-6'>RS. {subTotal}</h6>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <button onClick={proceedToCheckout} className="bg-primary my-6 mx-3 p-3 rounded text-white flex">
                            <div className='flex-grow'>Proceed to Checkout</div>
                            <p>Rs {total}</p>
                        </button>
                    </div>
                }

                {
                    !!!cart?.length &&
                    <>
                        <div className='flex items-center h-full'>
                            <div className='flex-grow  text-center'>
                                <h2 className='font-bold'>No items in your cart</h2>
                                <p>Your favourite items are just a click away</p>
                            </div>
                        </div>
                        <button onClick={() => setOpenCart(false)} className="bg-primary my-4 mx-3 p-3 rounded text-white">Start Shopping</button>
                    </>
                }
            </Drawer>
            <div className='lg:fixed inset-0 bg-black opacity-[0.6] z-10'></div>
        </>
    )
}
