// @ts-nocheck
import React, {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {useCartContext} from 'components/Cart/CartContext'

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  closeModal: () => void
}

const CartDialog = ({isOpen, setIsOpen, closeModal}: Props) => {
  const {cartItems, dispatch} = useCartContext()
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
  }

  function removeItemFromCart(item) {
    if (cartItems.products.length === 0) {
      dispatch({type: 'REMOVE', payload: item})
    } else {
      let productIndex = cartItems.products.findIndex(
        product => product.id === item.id,
      )
      if (productIndex > -1) {
        dispatch({
          type: 'CHANGE_QUANTITY',
          payload: {...item, qty: cartItems.products[productIndex].qty - 1},
        })
      } else {
        dispatch({type: 'ADD', payload: item})
      }
    }
  }

  function totalCartCost() {
    return cartItems.products.reduce(
      (acc, curr) => acc + Number(curr.price) * curr.qty,
      0,
    )
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-gray-200 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white bg-gray-900 py-4 px-4 flex justify-between"
                  >
                    <h2>
                      My Cart
                      {` (${cartItems.products.reduce(
                        (acc, curr) => acc + Number(curr.qty),
                        0,
                      )} item)`}
                    </h2>
                    <button aria-label="Close Cart" onClick={closeModal}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </Dialog.Title>
                  <div className="mt-2 h-[50vh] overflow-scroll">
                    {cartItems.products.length === 0 ? (
                      <div className="text-center h-full">
                        <h2 className="text-gray-900 text-xl font-bold">
                          No items in your cart
                        </h2>
                        <p className="text-base">
                          Your favourite items are just a click away
                        </p>
                      </div>
                    ) : (
                      cartItems.products.map(item => {
                        return (
                          <div className="bg-white p-4 flex mb-2" key={item.id}>
                            <img
                              className="h-20 w-20"
                              src={item.imageURL}
                              alt=""
                              srcSet=""
                            />
                            <div className="pl-4">
                              <h2 className="text-gray-900 text-lg font-bold">
                                {item.name}
                              </h2>
                              <div className="flex mt-2 gap-4 items-center">
                                <button
                                  aria-label={`remove 1 quantity of ${item.name}`}
                                  onClick={() => removeItemFromCart(item)}
                                  className="inline-flex items-center justify-center w-6 h-6  text-white transition-colors duration-150 bg-[#d10054] rounded-full focus:shadow-outline hover:bg-pink-800"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </button>
                                <h4 className="text-gray-900 text-lg">
                                  {item.qty}
                                </h4>
                                <button
                                  aria-label={`add 1 quantity of ${item.name}`}
                                  onClick={() => addItemToCart(item)}
                                  className="inline-flex items-center justify-center w-6 h-6  text-white transition-colors duration-150 bg-[#d10054] rounded-full focus:shadow-outline hover:bg-pink-800"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <h4 className="text-gray-900 text-lg">
                                  Rs.{item.price}
                                </h4>
                              </div>
                            </div>
                            <h2 className="self-center grow text-right text-gray-900 text-lg">
                              Rs.{item.qty * item.price}
                            </h2>
                          </div>
                        )
                      })
                    )}
                    <div
                      className={`bg-white p-4 mx-2 gap-2 items-center ${
                        cartItems.products.length === 0 ? 'hidden' : 'flex'
                      }`}
                    >
                      <img src="/static/images/lowest-price.png" alt="" />
                      <p className="text-base">
                        You won&apos;t find it cheaper anywhere
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 bg-white border-top border border-gray-300 p-4">
                    <p className="text-center mb-4">
                      Promo code can be applied on payment page
                    </p>
                    {cartItems.products.length === 0 ? (
                      <button
                        aria-label="close cart"
                        type="button"
                        onClick={closeModal}
                        className="text-white bg-[#d10054] px-4 py-4 text-center w-full"
                      >
                        <span>Start Shopping</span>
                      </button>
                    ) : (
                      <button
                        aria-label="Proceed to Checkout"
                        type="button"
                        onClick={closeModal}
                        className="text-white bg-[#d10054] px-4 py-4 flex justify-between w-full"
                      >
                        <span>Proceed to Checkout</span>
                        <span>Rs.{totalCartCost()}</span>
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CartDialog
