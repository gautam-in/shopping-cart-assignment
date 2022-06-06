import React from 'react'
import {Category} from '../../typings'

interface Props {
  data: Category[]
}

const ProductSidebar = ({data}: Props) => {
  console.log(data)
  return (
    <aside className="bg-[#EAEAEA] sticky h-screen md:min-w-[22%] w-0 md:top-[92px] lg:top-[100px] -z-1 hidden md:block">
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
                className="text-gray-500 text-normal py-3 px-6"
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
