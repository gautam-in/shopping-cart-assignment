import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIconSVG } from "../../assets/menu.svg";

export const HeaderWrapper = styled.header`
	width: 100%;
	padding-top: 5px;
	box-shadow: 0 1px 5px rgba(95, 94, 94, 0.25);
	/* box-shadow: 0 4px 2px -2px gray; */

	@media (max-width: 425px) {
		padding: 0;
	}
`;

export const HeaderContent = styled.div`
	max-width: 1080px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
`;

export const NavSection = styled.div`
	width: 75%;
	/* flex: 1 0 0; */

	@media (max-width: 425px) {
		width: auto;
	}
`;

export const NavItems = styled.div`
	display: flex;
	padding: 20px 0 0;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 425px) {
		padding: 0;
		justify-content: flex-end;
	}
`;

export const AuthLinks = styled.div`
	display: flex;
	justify-content: flex-end;

	@media (max-width: 425px) {
		display: none;
	}
`;

export const AuthLink = styled(Link)`
	padding: 0 10px;
	font-size: 14px;
`;

export const NavLinks = styled.div`
	@media (max-width: 425px) {
		display: none;
	}
`;

export const NavLink = styled(Link)`
	padding: 0 10px;
	color: #6c6c6c;
	font-weight: 600;
`;

export const LogoContainer = styled.div`
	padding-top: 5px;
	align-items: center;
	display: flex;
`;

export const Logo = styled.img`
	max-width: 160px;

	@media (max-width: 425px) {
		max-width: 100px;
	}
`;

export const MenuIcon = styled(MenuIconSVG)`
	padding-right: 25px;
`;

export const MenuIconWrapper = styled.div`
	width: 40px;
	height: 40px;
	padding-left: 10px;

	@media (min-width: 426px) {
		display: none;
	}
`;

export const MobileNavWrapper = styled.div`
	position: absolute;
	width: 100%;
	top: 56px;
	background-color: #eee;
	z-index: 1001;

	@media (min-width: 426px) {
		display: none;
	}
`;

export const MobileNavLink = styled(Link)`
	display: block;
	padding: 0 10px;
	color: #6c6c6c;
	font-weight: 600;
	padding: 10px 15px;
	border-bottom: 1px solid #ccc;
`;
