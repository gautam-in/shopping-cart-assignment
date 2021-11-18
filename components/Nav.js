import Link from "next/link";
import NavStyles from "./styles/NavStyles";



export default function Nav() {
  return (
    <NavStyles>
      <div className="container-header">
        <div className="logo ">
          <Link href="/">
            <a>
              <img
                className="img-logo"
                src="/images/logo.png"
                alt="sabka-bazar-logo"
              />
            </a>
          </Link>
        </div>
        <div className="container">
          <div className="menu-right">
            <Link href="/login">LogIn</Link>
            <Link href="/register">Register</Link>
          </div>
          <div className="menu-left">
            <div className="menu-left-container">
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
            </div>
            <div className="cart-container">
              <Link href="/cart">
                <img src="/images/cart.svg" alt="cart" />
              </Link>
              <Link href="/cart">
                <span className="items-in-cart">0 items</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </NavStyles>
  );
}
