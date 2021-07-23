import React from 'react'
import SBLogo from './logo.png'
import { default as CartImage } from './cart.svg';
import { Link } from 'react-router-dom'

export default function PrimaryHeader() {
    return (

        <nav className="HeaderTop">
            <Link to="/" className="LogoContainer">
                <img
                    src={SBLogo} alt="sb_logo" />
            </Link>

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
        </nav>

    )
}
