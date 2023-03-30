import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { HiShoppingCart } from "react-icons/hi"

import { LoggedInLinks, LogoutLink } from "./AuthLinks"
import { Cart } from "../Cart"
import { Button } from "../Common"

import { pluralize } from "../../utils"
import { AuthContext, CartContext } from "../../context"

import "./styles.scss"

export const Header = () => {
  const [showCart, setShowCart] = useState(false)

  const { state } = useContext(CartContext)
  const { user, logout } = useContext(AuthContext)

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

          <a href="#main" className="skip-to-main-content-link">
            Skip to main content
          </a>

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
            {user ? <LogoutLink signOut={logout} /> : <LoggedInLinks />}
          </ul>

          <div
            className="minicart flex"
            role="button"
            onClick={() => setShowCart(true)}
          >
            <HiShoppingCart className="cart-icon" />
            {state.itemCount} {pluralize("item", "s", state.itemCount)}
          </div>
        </div>
      </div>

      {showCart && <Cart show={showCart} setShowCart={setShowCart} />}
    </header>
  )
}
