import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";
import Cart from "../cart";

import {
	HeaderWrapper,
	HeaderContent,
	LogoContainer,
	Logo,
	AuthLinks,
	AuthLink,
	NavSection,
	NavItems,
	NavLinks,
	NavLink,
	MenuIcon,
	MenuIconWrapper,
	MobileNavWrapper,
	MobileNavLink,
} from "./styles";

const Header = () => {
	const {
		state: { isCartOpen },
		dispatch,
	} = useContext(CartContext);
	const [toggleMobileNav, setToggleMobileNav] = useState(false);

	const handleNavDisplay = () => {
		setToggleMobileNav(!toggleMobileNav);

		if (isCartOpen) {
			dispatch({
				type: "CART_TOGGLE",
			});
		}
	};

	const getMobileNav = () => {
		return (
			<MobileNavWrapper>
				<MobileNavLink to="/">Home</MobileNavLink>
				<MobileNavLink to="/products">Products</MobileNavLink>
				<MobileNavLink to="/sign-in">Sign In</MobileNavLink>
				<MobileNavLink to="/register">Register</MobileNavLink>
			</MobileNavWrapper>
		);
	};

	return (
		<>
			<HeaderWrapper>
				<HeaderContent>
					<LogoContainer>
						<MenuIconWrapper onClick={handleNavDisplay}>
							<MenuIcon />
						</MenuIconWrapper>
						<Link to="/">
							<Logo src="/static/images/logo_2x.png" alt="Logo" />
						</Link>
					</LogoContainer>

					<NavSection>
						<AuthLinks>
							<AuthLink to="/sign-in">Sign In</AuthLink>
							<AuthLink to="/register">Register</AuthLink>
						</AuthLinks>
						<NavItems>
							<NavLinks>
								<NavLink to="/">Home</NavLink>
								<NavLink to="/products">Products</NavLink>
							</NavLinks>
							<Cart />
						</NavItems>
					</NavSection>
					{toggleMobileNav ? getMobileNav() : null}
				</HeaderContent>
			</HeaderWrapper>
		</>
	);
};

export default Header;
