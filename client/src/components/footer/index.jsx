import React from "react";

import { FooterWrapper, FooterContent } from "./styles";

const Footer = () => (
	<FooterWrapper>
		<FooterContent>
			Copyright &#169; 2011-{new Date().getFullYear()} Sabka Bazaar Grocery
			Supplies Pvt Ltd.
		</FooterContent>
	</FooterWrapper>
);

export default Footer;
