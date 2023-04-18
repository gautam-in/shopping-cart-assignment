import React from 'react'
import { useCategories } from '../../../hooks/queries'
import { Link } from 'react-router-dom'

export default function Categories() {
    const { data: categories } = useCategories()

    return (
        <section>
            {
                categories?.map((item, index) => {
                    return (
                        <React.Fragment key={item?.id}>
                            <div className={`flex ${index % 2 !== 0 ? "flex-row-reverse" : ""} gap-2 items-center shadow py-10 my-2 px-2`}>
                                <div className="flex-1">
                                    <img loading="lazy" className='h-[200px] object-contain m-auto' src={item?.imageUrl} alt={`${item?.name}`} />
                                </div>
                                <div className="flex-1 text-center">
                                    <h3 className='font-bold mb-3'>{item?.name}</h3>
                                    <p className='mb-3'>{item?.description}</p>
                                    <Link to="/products" state={{category: item?.id}} className='bg-primary text-white py-2 px-4'>Explore {item?.key}</Link>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </section>
    )
}
