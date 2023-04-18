import React, { useContext } from 'react'
import { GlobalContext } from '../../provider/GlobalProvider'

function Header() {
    const { cart, setOpenCart } = useContext(GlobalContext)
    const totalCartQuantity = cart.reduce((acc, el) => acc + el.quantity, 0)
    return (
        <div className="shadow">
            <header className='container mx-auto'>
                <div className="right">
                    <nav>
                        <ul className='flex flex-row-reverse gap-4'>
                            <li><a href="/register">Register</a></li>
                            <li><a href="/login">Signin</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='flex items-center gap-6 p-2 pt-0'>
                    <div className='flex-grow sm:flex-grow-0'>
                        <picture>
                            <source media="(min-width:1440px)" srcSet="/static/images/logo_2x.png" />
                            <img height="50" width="110" className='h-[50px]' src="/static/images/logo.png" alt="Flowers" />
                        </picture>
                    </div>
                    <nav className='flex-grow hidden sm:block'>
                        <ul className='flex gap-x-3'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/products">Products</a></li>
                        </ul>
                    </nav>
                    <div role="button" tabIndex={0} onClick={() => setOpenCart(true)} className='flex'>
                        <img width="30" height="30" src="/static/images/cart.svg" className='h-[30px] fill-primary' alt="Cart" />
                        <p>{totalCartQuantity} items</p>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default React.memo(Header)