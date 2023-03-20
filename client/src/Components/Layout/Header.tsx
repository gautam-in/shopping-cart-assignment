import { useContext } from "react"
import { Link } from "react-router-dom"
import { BsCart3 } from "react-icons/bs"

import { CartContext } from "../../context"

import "./styles.scss"

export const Header = () => {
  const { state } = useContext(CartContext)

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

          <div className="minicart flex">
            <BsCart3 className="cart-icon" />
            {state.items.length} items
          </div>
        </div>
      </div>
    </header>
  )
}
