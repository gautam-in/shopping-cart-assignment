import styled from "styled-components";

export const CartWrapper = styled.div`
	position: absolute;
	right: 0;
	width: 480px;
	min-height: 480px;
	background-color: #eee;
	/* height: 100vh; */
`;
export const CartTitle = styled.h3`
	background-color: #444;
	padding: 20px;
	color: #fff;
	margin: 0;
`;

export const SubTitle = styled.span`
	/* background-color: #444;
	padding: 20px; */
`;

export const CartItems = styled.div`
	margin-top: 15px;
`;

export const LowPriceBlock = styled.div`
	background-color: #fff;
	margin: 15px;
	border-radius: 4px;
	padding: 10px 15px;
	display: flex;
	align-items: center;
`;

export const LowPriceImage = styled.img`
	width: 144px;
	margin-right: 20px;
`;

export const CartFooter = styled.div`
	border-top: 1px solid #ddd;
	background-color: #fff;
	padding: 10px;
`;

export const PromoText = styled.div`
	text-align: center;
	margin-bottom: 10px;
`;

export const Checkout = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const CheckoutText = styled.span``;

export const CheckoutTotal = styled.span``;
