import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { HiShoppingCart } from "react-icons/hi"

import { Cart } from "../Cart"

import { CartContext } from "../../context"

import "./styles.scss"

export const Header = () => {
  const [showCart, setShowCart] = useState(false)
  const { state } = useContext(CartContext)

  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [showCart])

  return (
    <header>
      <div className="container header-container flex">
        <div className="nav-container">
          <Link to="/">
            <img
              src="/static/images/logo.png"
              alt="Sabka Bazar logo"
              className="logo"
            />
          </Link>

          <nav className="flex">
            <ul className="flex">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="auth-links-cart flex">
          <ul className="auth-links flex">
            <li>
              <Link to="/login">SignIn</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>

          <div
            className="minicart flex"
            role="button"
            onClick={() => setShowCart(true)}
          >
            <HiShoppingCart className="cart-icon" />
            {state.items.length} items
          </div>
        </div>
      </div>

      {showCart && <Cart setShowCart={setShowCart} />}
    </header>
  )
}
