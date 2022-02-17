import React from "react";
import { Link } from "react-router-dom";
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
} from "./styles";

const Header = () => (
	<>
		<HeaderWrapper>
			<HeaderContent>
				<LogoContainer>
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
			</HeaderContent>
		</HeaderWrapper>
	</>
);

export default Header;
