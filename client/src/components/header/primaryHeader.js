import React, { useEffect, useState, useContext } from 'react'

import SBLogo from './logo.png'
import { default as CartImage } from './cart.svg';
import { Link } from 'react-router-dom'

import { fetchProducts } from '../../api/product';
import MyContext from '../../context/myContext';

export default function PrimaryHeader() {

    const { setProducts, context: { cart } } = useContext(MyContext);

    useEffect(() => {
        fetchProducts()
            .then(res => {
                // setList(res.data);
                setProducts(res.data)
            })
            .catch(error => {

            })
    }, [])


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
                {cart.length > 0 &&
                    < p style={{ position: 'absolute', right: 0 }}>{cart.length}</p>}

                <Link to="/cart">
                    <img
                        src={CartImage}
                        alt="cart_image" />
                </Link>
            </div>
        </nav >

    )
}
