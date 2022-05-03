import React from 'react'
import {  useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const Sidebar = () => {
    const [searchParam, setSearchParam] = useSearchParams()
    const categories = useSelector(state => state.product_category.categories)
    return (
        <>

        <div className='sidebar'>
            <ul>
                {
                    categories.map((item, i) => (
                        <li key={item.id} onClick={() => { setSearchParam({ filter: item.id }) }}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
        </>
    )
}

export default Sidebar
