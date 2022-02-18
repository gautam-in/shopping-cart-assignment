import styled from "styled-components";

export const CartWrapper = styled.div`
	position: absolute;
	right: 0;
	width: 480px;
	background-color: #eee;
	height: calc(100vh - 95px);
	display: flex;
	flex-flow: column;
	z-index: 10;
`;

export const CartTitle = styled.h3`
	background-color: #444;
	padding: 20px;
	color: #fff;
	margin: 0;
	display: flex;
	justify-content: space-between;
`;

export const CartHeading = styled.div``;

export const SubTitle = styled.span`
	font-size: 14px;
	font-weight: 400;
	/* background-color: #444;
	padding: 20px; */
`;

export const CartCloseIcon = styled.span`
	font-size: 18px;
	font-weight: 400;
	cursor: pointer;
	/* background-color: #444;
	padding: 20px; */
`;

export const CartItems = styled.div`
	margin-top: 15px;
	height: calc(100vh - 300px);
	flex: 1;
	overflow: auto;
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

export const NoItemsBlock = styled.div`
	background-color: #fff;
	text-align: center;
	padding: 10px;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const NoItemsBlockMessage = styled.div`
	margin-bottom: 20px;
`;

export const NoItemsTitle = styled.h3`
	margin: 10px 0;
`;

export const NoItemsSubTitle = styled.span`
	font-size: 14px;
`;
export const StartShoppingButton = styled.span`
	padding: 10px;
	background-color: #fff;
`;
