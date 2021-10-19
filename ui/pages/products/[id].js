import React from 'react'
import { useRouter } from 'next/router'
import Products from '../../components/Products'

function ProductDetails({query}) {
    const router = useRouter()
    return (
        <div>
            {/* <h1>Niraj Kumar {router.query.id}</h1> */}
            <Products prodType={router.query.id}/>
        </div>
    )
}

export default ProductDetails
