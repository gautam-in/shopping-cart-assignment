import React from 'react'
import {useQuery} from 'react-query'
import {Category} from 'typings'
import Image from 'next/image'
import axios from 'axiosConfig'
import {useRouter} from 'next/router'
import PrimaryButton from 'components/utils/Buttons/PrimaryButton/PrimaryButton'

async function fetchCategories() {
  const {data} = await axios.get(`/categories/`)
  return data
}

const Categories = () => {
  const {isLoading, isError, data, error} = useQuery(
    'categories',
    fetchCategories,
  )
  const router = useRouter()

  if (isLoading)
    return (
      <>
        <div className="flex justify-between items-center animate-pulse space-x-8 md:mx-0 mx-4 mb-8">
          <div className="h-48 w-full bg-slate-200"></div>
          <div className="h-48 w-[30%] bg-slate-200"></div>
        </div>
        <div className="flex justify-between items-center animate-pulse space-x-8 md:mx-0 mx-4 mb-8">
          <div className="h-48 w-[30%] bg-slate-200"></div>
          <div className="h-48 w-full bg-slate-200"></div>
        </div>
      </>
    )
  if (isError) return <>Error Occured</>
  const navigateToProducts = (category: Category) => {
    router.push(`/products?category=${category.id}`)
  }
  return (
    <div className="container mx-auto mt-16">
      {data
        .sort(function (a: {order: number}, b: {order: number}) {
          return a.order - b.order
        })
        .filter((categories: {order: number}) => categories.order > 0)
        .map((category: Category, index: number) => {
          return (
            <div
              className={`flex justify-between items-center ${
                index < data.length - 2
                  ? ` shadow-[0_25px_20px_-20px_rgba(174,171,171,0.45)]`
                  : null
              } ${
                index % 2 !== 0 ? `flex-row-reverse` : `flex-row`
              } bg-white py-4 my-8`}
              key={category.id}
            >
              <Image
                src={category.imageUrl}
                alt={`image depicting ${category.name} category`}
                width={450}
                height={300}
              />
              <div className="flex flex-col items-center grow">
                <h2 className="text-lg text-slate-900 font-semibold">
                  {category.name}
                </h2>
                <p className="text-normal text-slate-500 mt-2 mb-4 px-4 md:px-0">
                  {category.description}
                </p>
                <PrimaryButton
                  onClick={() => navigateToProducts(category)}
                  text={`Explore ${category.key}`}
                />
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Categories
