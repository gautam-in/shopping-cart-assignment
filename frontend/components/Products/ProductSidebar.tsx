// @ts-nocheck
import React from 'react'
import {Category} from '../../typings'
import {categoryContext} from './CategoryContext'
interface Props {
  data: Category[]
}

const ProductSidebar = ({data}: Props) => {
  const {selectedCategory, setSelectedCategory} =
    React.useContext(categoryContext)

  const handleCategoryFilter = (id: string) => {
    if (selectedCategory === id) setSelectedCategory('ALL')
    else setSelectedCategory(id)
  }

  return (
    <aside className="bg-[#EAEAEA] sticky h-screen md:min-w-[22%] w-0 md:top-[86px] hidden md:block">
      <div className="flex flex-col divide-y px-2 divide-gray-300 mt-8">
        {data
          .sort(function (a: {order: number}, b: {order: number}) {
            return a.order - b.order
          })
          .filter((categories: {order: number}) => categories.order > 0)
          .map((category: Category, index: number) => {
            return (
              <a
                key={category.id}
                className="text-gray-700 text-normal py-3 px-6 cursor-pointer"
                onClick={() => handleCategoryFilter(category.id)}
              >
                {category.name}
              </a>
            )
          })}
      </div>
    </aside>
  )
}

export default ProductSidebar
