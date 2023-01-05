import React from "react"
import Axios from "axios"
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom"
import {
  HOME_PAGE,
  LOGIN_PAGE,
  PRODUCTS_PAGE,
  REGISTER_PAGE,
} from "./constants/routes"
import { CartContextItem, CartProvider } from "./context/cart"
import { Suspense, useState } from "react"
import { Product } from "./apis/product"
import { Loader } from "./components/Loader"
import PrivateRoute from "./HOC/private-route"
import Cart from "./views/cart"
import { AuthProvider } from "./context/auth"
import LoggedOutRoute from "./HOC/logged-out-route"

const LazyHome = React.lazy(() => import("./views/home"))
const LazyProducts = React.lazy(() => import("./views/products"))
const LazyLogin = React.lazy(() => import("./views/auth/login"))
const LazyRegister = React.lazy(() => import("./views/auth/signup"))

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
  const [isCartDisplayed, setIsCartDisplayed] = useState<boolean>(false)
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(true)

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
      if (newCartItems[foundIndex].quantity + quantityToBeAdded === 0) {
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
    <AuthProvider value={{ setIsUserLoggedIn, isUserLoggedIn }}>
      <CartProvider
        value={{
          cartItems,
          addCartItem,
          loading,
          setLoading,
          isCartDisplayed,
          setIsCartDisplayed,
        }}
      >
        <Router>
          <Suspense fallback={null}>
            {loading && <Loader />}
            {isCartDisplayed ? <Cart /> : null}
            <Routes>
              <Route
                path={HOME_PAGE}
                element={<PrivateRoute Component={LazyHome} />}
              />
              <Route
                path={PRODUCTS_PAGE}
                element={<PrivateRoute Component={LazyProducts} />}
              />
              <Route
                path={LOGIN_PAGE}
                element={<LoggedOutRoute Component={LazyLogin} />}
              />
              <Route
                path={REGISTER_PAGE}
                element={<LoggedOutRoute Component={LazyRegister} />}
              />
              <Route
                path="*"
                element={<Navigate to={PRODUCTS_PAGE}></Navigate>}
              />
            </Routes>
          </Suspense>
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
