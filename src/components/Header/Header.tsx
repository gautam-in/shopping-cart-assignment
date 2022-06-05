import React from "react";
import { Nav } from "../Nav/Nav";
import { NavMobile } from "../NavMobile/NavMobile";
import { NavLink } from "react-router-dom";
import { useViewport } from "../../hooks/useViewport";
import type { CartSize } from "../../types/customTypes";
import logo from "../../static/images/logo.png";
import "./Header.scss";

export const Header = ({ size }: CartSize) => {
    const windowWidth = useViewport();

    return (
        <header className="header">
            <div className="header__logo">
                <NavLink to={"/"}><img src={logo} alt="Sabka Bazaar Logo"/></NavLink>
            </div>
            {windowWidth > 768 ? <Nav size={size}/> : <NavMobile size={size}/>}
        </header>
    )
}