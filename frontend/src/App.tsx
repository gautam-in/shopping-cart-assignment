import React from "react"
import Axios from "axios"
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom"
import {
  CART_PAGE,
  PRODUCT_DETAIL_PAGE,
  PRODUCT_PAGE,
} from "./constants/routes"
import { CartContextItem, CartProvider } from "./context/cart"
import { Suspense, useState } from "react"
import { Product } from "./apis/product"
import { Loader } from "./components/Loader"

const LazyProducts = React.lazy(() => import("./views/products"))
const LazyCart = React.lazy(() => import("./views/cart"))
const LazyProductDetail = React.lazy(() => import("./views/product-detail"))

Axios.defaults.baseURL = process.env.REACT_APP_API

Axios.interceptors.request.use((config) => {
  return config
})
Axios.interceptors.response.use((config) => {
  return config
})

function App() {
  const [cartItems, setCartItems] = useState<CartContextItem[]>(
    [] as CartContextItem[],
  )
  const [loading, setLoading] = useState<boolean>(false)

  const addCartItem = (product: Product, quantityToBeAdded: number) => {
    let foundIndex = -1
    cartItems.every((item: CartContextItem, index) => {
      if (item.id === product.id) {
        foundIndex = index
        return false
      } else return true
    })
    const newCartItems = [...cartItems]
    if (foundIndex >= 0) {
      if (newCartItems[foundIndex].quantity === 1 && quantityToBeAdded === -1) {
        newCartItems.splice(foundIndex, 1)
      } else
        newCartItems[foundIndex] = {
          ...cartItems[foundIndex],
          quantity: cartItems[foundIndex].quantity + quantityToBeAdded,
        }
    } else newCartItems.push({ ...product, quantity: 1 })
    setCartItems(newCartItems)
  }

  return (
    <CartProvider
      value={{
        cartItems,
        addCartItem,
        loading,
        setLoading,
      }}
    >
      <Router>
        <Suspense fallback={null}>
          {loading && <Loader />}
          <Routes>
            <Route path={PRODUCT_PAGE} element={<LazyProducts />} />
            <Route path={CART_PAGE} element={<LazyCart />} />
            <Route path={PRODUCT_DETAIL_PAGE} element={<LazyProductDetail />} />
            <Route path="*" element={<Navigate to={PRODUCT_PAGE}></Navigate>} />
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  )
}

export default App
