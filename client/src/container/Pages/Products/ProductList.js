import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../provider/GlobalProvider'
import { useProducts } from '../../../hooks/queries'
import { useAddToCart } from '../../../hooks/mutations'

export default function ProductList({ filterByCategoryId }) {
    const { data: products } = useProducts()
    const { updateCart } = useContext(GlobalContext)
    const [alert, setAlert] = useState(null)
    // const mutation = useAddToCart()

    const addToCart = async (item) => {
        try {
            // await mutation.mutateAsync({ product_id: item?.id })
            let message = updateCart(item, 'ADD')
            setAlert(message)
        } catch (e) {
            console.log(e)
        }

    }


    let data = products
    if (filterByCategoryId)
        data = products?.filter(data => data?.category === filterByCategoryId)
    return (
        <div className='grid grid-cols-12 gap-4'>
            <div aria-live='polite' className='sr-only' aria-atomic='true'>{alert}</div>
            {
                data?.map(item => {
                    return (
                        <div key={item?.id} className="col-span-12 sm:col-span-6 lg:col-span-3">
                            <div className="flex flex-col shadow h-[100%] p-2 border-b border-black border-dashed">
                                <h4 className='font-bold flex-grow'>{item.name}</h4>
                                <img width="200" height="200" className='h-[200px] object-contain   mx-auto' src={item?.imageURL} alt={item?.name} />
                                <p className='bg-[#eaeaea] p-1 mt-2 text-[12px] flex-grow'>{item?.description}</p>
                                <div className="flex gap-3 mt-4">
                                    <h5 className='flex-grow'>MRP Rs.{item?.price}</h5>
                                    <button onClick={() => addToCart(item)} aria-label={`Buy ${item?.name}`} className='bg-primary text-white py-2 px-4'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
