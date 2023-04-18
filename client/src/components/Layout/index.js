import React, { Suspense, useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import { GlobalContext } from '../../provider/GlobalProvider'

const Cart = React.lazy(() => import('../Cart'))

export default function Layout({ children }) {
    const { openCart } = useContext(GlobalContext)
    return (
        <>
            <Header />
            <div className="container mx-auto relative">
                <Suspense fallback={null}>
                    {openCart && <Cart />}
                </Suspense>
                {children}
            </div>
            <Footer />
        </>
    )
}
