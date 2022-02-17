import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
	width: 100%;
	padding-top: 5px;
	box-shadow: 0 1px 5px rgba(95, 94, 94, 0.25);
	/* box-shadow: 0 4px 2px -2px gray; */
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
`;

export const NavItems = styled.div`
	display: flex;
	padding: 20px 0 0;
	justify-content: space-between;
	align-items: center;
`;

export const AuthLinks = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const AuthLink = styled(Link)`
	padding: 0 10px;
	font-size: 14px;
`;

export const NavLinks = styled.div``;

export const NavLink = styled(Link)`
	padding: 0 10px;
	color: #777;
	font-weight: 600;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.img`
	max-width: 150px;
`;
