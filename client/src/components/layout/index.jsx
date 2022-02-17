import React, { useContext } from "react";

import Header from "../header";
import Footer from "../footer";

import { LayoutContainer, Content } from "./styles";
import CartBlock from "../cart-block";
import { CartContext } from "../../contexts/cart-context";

const Layout = ({ children }) => {
	const {
		state: { isCartOpen },
	} = useContext(CartContext);

	return (
		<LayoutContainer>
			<Header />
			<Content>
				{isCartOpen ? <CartBlock /> : null}
				{children}
			</Content>
			<Footer />
		</LayoutContainer>
	);
};

export default Layout;
