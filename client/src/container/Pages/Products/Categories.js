import React from 'react'
import { useCategories } from '../../../hooks/queries'

export default function Categories({ filterCategory, updateCategoryFilter }) {
    const {data: categories} = useCategories()
  return (
    <nav>
          <ul>
            {
                categories?.map(item => {
                    return (
                        <li key={item?.id} className={`p-2 border-b border-[#d8d8d8] ${filterCategory === item?.id ? 'bg-white': ''}`}><a onClick={() => updateCategoryFilter(item?.id)} role="button" tabIndex={0} href="#">{item?.name}</a></li>
                    )
                })
            }
          </ul>
    </nav>
  )
}
