// @ts-nocheck
import React, {useState, useEffect, useReducer} from 'react'
import {useQuery} from 'react-query'
import {Product} from '../../typings'
import {categoryContext} from './CategoryContext'
import {Category} from '../../typings'
import CartDialog from '../Cart/CartDialog'
import {useCartContext} from '../Cart/CartContext'
import {useRouter} from 'next/router'

async function fetchProducts() {
  const response = await fetch(`http://localhost:5000/products/`)
  return response.json()
}

const ProductList = () => {
  const router = useRouter()
  const {category} = router.query
  let [isOpen, setIsOpen] = useState(false)
  const {cartItems, dispatch} = useCartContext()

  const {selectedCategory, categoryList, setSelectedCategory} =
    React.useContext(categoryContext)
  const {isLoading, isError, data, error} = useQuery('products', fetchProducts)

  useEffect(() => {
    if (category) {
      setSelectedCategory(category)
    }
    return () => {
      closeModal()
    }
  }, [category, setSelectedCategory])

  if (isLoading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-4 mt-6 mb-4 animate-pulse">
        {[1, 1, 1, 1, 1, 1, 1, 1].map((dummy, index) => (
          <React.Fragment key={index}>
            <div className="h-40 w-40 bg-slate-200"></div>
          </React.Fragment>
        ))}
      </div>
    )

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function addItemToCart(item) {
    if (cartItems.products.length === 0) {
      dispatch({type: 'ADD', payload: item})
    } else {
      let productIndex = cartItems.products.findIndex(
        product => product.id === item.id,
      )
      if (productIndex > -1) {
        dispatch({
          type: 'CHANGE_QUANTITY',
          payload: {...item, qty: cartItems.products[productIndex].qty + 1},
        })
      } else {
        dispatch({type: 'ADD', payload: item})
      }
    }
    openModal()
  }

  const renderFilteredProducts = () => {
    return data
      .filter(
        (product: {category: string}) => product.category === selectedCategory,
      )
      .map((product: Product, index: number) => {
        return (
          <div
            className="relative border-b border-dashed border-gray-300"
            key={product.id}
          >
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
                <button
                  className="text-white bg-[#d10054] px-8 py-2 md:grow lg:grow-0 mr-2"
                  onClick={() => addItemToCart(product)}
                >
                  Buy Now
                  <span className="hidden md:inline lg:hidden">{` @ ${product.price}`}</span>
                </button>
              </div>
            </div>
          </div>
        )
      })
  }
  return (
    <div>
      <CartDialog
        closeModal={closeModal}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className=" md:hidden flex justify-center">
        <div className="mb-3 w-full">
          <select
            className="block w-full px-3 py-3 text-base font-normal text-white bg-[#d10054] border border-solid border-gray-300 transition ease-in-out m-0
      focus:text-white-700 focus:bg-[#d10054] focus:border-blue-600 focus:outline-none"
            aria-label="Select a Category"
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option defaultValue="true" value="ALL">
              All Products
            </option>
            {categoryList.map(
              (category: {
                id: string | number | readonly string[] | undefined
                name:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined
              }) => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ),
            )}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-4 mt-6 mb-4">
        {selectedCategory === 'ALL'
          ? data.map((product: Product, index: number) => {
              return (
                <div
                  className="relative border-b border-dashed border-gray-300 pb-2"
                  key={product.id}
                >
                  <h2 className="font-bold text-lg text-slate-900 h-[60px]">
                    {product.name}
                  </h2>
                  <div className="">
                    <div className="flex flex-col justify-between gap-2">
                      <div className="flex flex-row lg:flex-col lg:justify-between">
                        <img
                          src={product.imageURL}
                          alt=""
                          className="mb-5 h-40 w-36 md:w-36 md:h-36 lg:w-full md:h-48 object-fit object-top"
                        />
                        <div className="flex justify-between flex-col px-2 gap-4">
                          <div className="relative bg-gray-100 px-2 py-2 text-sm h-full lg:h-[75px]">
                            <p className="lg:line-clamp-3">
                              {product.description}
                            </p>
                          </div>
                          <button
                            className="text-white bg-[#d10054] px-4 py-2 inline md:hidden mb-4"
                            onClick={() => addItemToCart(product)}
                          >
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
                      <button
                        className="text-white bg-[#d10054] px-8 py-2 md:grow lg:grow-0 mr-2"
                        onClick={() => addItemToCart(product)}
                      >
                        Buy Now
                        <span className="hidden md:inline lg:hidden">{` @ ${product.price}`}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          : renderFilteredProducts()}
      </div>
    </div>
  )
}

export default ProductList
