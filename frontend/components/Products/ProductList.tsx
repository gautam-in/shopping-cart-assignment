import React from 'react'
import {useQuery} from 'react-query'
import {Product} from '../../typings'

async function fetchProducts() {
  const response = await fetch(`http://localhost:5000/products/`)
  return response.json()
}

const ProductList = () => {
  const {isLoading, isError, data, error} = useQuery('products', fetchProducts)

  if (isLoading) return <div>Loading....</div>
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-4 mt-6 mb-4">
      {data.map((product: Product, index: number) => {
        return (
          <div className="relative border-b border-dashed border-gray-300">
            <h2 className="font-bold text-lg text-slate-900 h-[60px]">
              {product.name}
            </h2>
            <div className="">
              <div className="flex flex-col justify-between gap-2">
                <div className="flex flex-row lg:flex-col lg:justify-between">
                  <img
                    src={product.imageURL}
                    alt=""
                    className="mb-5 h-40 w-40 md:w-36 md:h-36 lg:w-full md:h-56 lg:h-64 object-fit object-top"
                  />
                  <div className="flex justify-between flex-col px-2 gap-4">
                    <div className="relative bg-gray-200 px-2 py-2 text-sm h-full lg:h-[75px]">
                      <p className="lg:line-clamp-3"> {product.description}</p>
                    </div>
                    <button className="text-white bg-[#d10054] px-4 py-2 inline md:hidden mb-4">
                      Buy Now
                      <span className="inline lg:hidden">{` @ ${product.price}`}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="md:flex justify-between my-2 items-center hidden">
                <div className="pl-2 hidden lg:block">
                  MRP Rs.{product.price}
                </div>
                <button className="text-white bg-[#d10054] px-8 py-2 md:grow lg:grow-0 mr-2">
                  Buy Now
                  <span className="hidden md:inline lg:hidden">{` @ ${product.price}`}</span>
                </button>
              </div>
            </div>
          </div>
          // <div className="flex flex-col">
          //   <h2 className="font-bold text-lg text-slate-900 mb-2">
          //     {product.name}
          //   </h2>
          //   <div className="flex flex-col justify-between">
          //     <div className="mx-2" key={product.id}>
          //       <div className="flex flex-row lg:flex-col mb-4 ms:border-b md:border-dashed pb-4">
          //         <img
          //           src={product.imageURL}
          //           alt=""
          //           className="w-[150px] h-[150px] lg:w-[200px]"
          //         />
          //         <div className="flex flex-col justify-between">
          //           <p className="bg-gray-200 px-2 py-2 text-sm h-full">
          //             {product.description}
          //           </p>
          //           <button className="text-white bg-[#d10054] px-4 py-2 inline md:hidden">
          //             Buy Now
          //             <span className="inline lg:hidden">{` @ ${product.price}`}</span>
          //           </button>
          //         </div>
          //       </div>
          //     </div>
          //     <button className="text-white bg-[#d10054] px-4 py-2  hidden md:block w-100">
          //       Buy Now
          //       <span className="inline lg:hidden">{` @ ${product.price}`}</span>
          //     </button>
          //   </div>
          // </div>
        )
      })}
    </div>
  )
}

export default ProductList
