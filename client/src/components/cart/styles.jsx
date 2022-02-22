import styled from "styled-components";

import { ReactComponent as CartIconSVG } from "../../assets/cart.svg";

export const CartWrapper = styled.button`
	background-color: #f1f1f1;
	padding: 10px 15px;
	display: flex;
	align-items: center;
	height: 100%;
	cursor: pointer;
	border: 0;
	font-family: "Dosis";
	font-size: 16px;
`;

export const CartIcon = styled(CartIconSVG)`
	width: 34px;
	height: 34px;
	fill: #bf2957;
	padding-right: 10px;
`;

export const CartCount = styled.span`
	width: 50px;
`;
