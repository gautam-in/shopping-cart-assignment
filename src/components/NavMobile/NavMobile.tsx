import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import type { NavMobileProps } from "../../types/customTypes";
import { HiShoppingCart } from "react-icons/hi";
import "./NavMobile.scss";

export const NavMobile = ({ cartSize }: NavMobileProps) => {

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const navMenu = isMobileNavOpen ? "nav--mobile__links show-mobile-nav-menu" : "nav--mobile__links hide-mobile-nav-menu";

  const iconStyleOpen = {backgroundColor: "#f2f3f4"}
  const iconStyleClose = {backgroundColor: "#fff"}

  const handleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  }

  const handleClick = () => {
    setIsMobileNavOpen(false);  
  }

  return (
    <>
      <nav className="nav--mobile" onClick={handleMobileNav} style={isMobileNavOpen ? iconStyleOpen : iconStyleClose}>
        <HiShoppingCart className="cart-icon--mobile"/>
      </nav>

      <main className={navMenu} onClick={handleClick}>
        <NavLink to="/" className={ ({ isActive }) => isActive ? "activeLink" : "inactiveLink" }>Home</NavLink>
        <NavLink to="/products/all" className={ ({ isActive }) => isActive ? "activeLink" : "inactiveLink" }>Products</NavLink>
        <NavLink to="/signin" className={ ({ isActive }) => isActive ? "activeLink" : "inactiveLink" }>Sign In</NavLink>
        <NavLink to="/register" className={ ({ isActive }) => isActive ? "activeLink" : "inactiveLink" }>Register</NavLink>
        <NavLink to="/cart" className={ ({ isActive }) => isActive ? "activeLink" : "inactiveLink" }>Cart {cartSize > 0 ? `(${cartSize} items)` : null}</NavLink>
      </main>

      {cartSize > 0 && <span className="cart-size-indicator">{cartSize}</span>}
    </>
  )
}

export default NavMobile;
