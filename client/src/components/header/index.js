import React from 'react'
import SBLogo from './logo.png'
import { default as CartImage } from './cart.svg';

export default function Header() {
  return (
    <header className="SB_Header">

      <div className="HeaderTop">
        <div className="LogoContainer">
          <img
            src={SBLogo} alt="sb_logo" />
        </div>

        <form class="SearchContainer" action="action_page.php">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>

        <div className="CartContainer">

          <button className="LoginButton">Login</button>

          <img
            src={CartImage}
            alt="cart_image" />
        </div>
      </div>

      <hr/>

      <div className="CategoryContainer">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>

    </header>
  )
}
