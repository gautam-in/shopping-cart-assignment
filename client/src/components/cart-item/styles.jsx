import styled from "styled-components";

export const CartItemContainer = styled.div`
	display: flex;
	align-content: center;
	padding: 15px;
	background-color: #fff;
	border-bottom: 1px solid #ddd;
`;

export const CartImg = styled.img`
	width: 20%;
	margin-right: 15px;
`;

export const CartItemDetails = styled.div`
	flex: 1;
`;

export const Title = styled.h3`
	margin: 10px 0;
`;

export const PriceBlock = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const CartActions = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 15px;
`;

export const Total = styled.span`
	font-size: 18px;
	justify-self: flex-end;
`;
