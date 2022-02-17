import styled from "styled-components";

export const CardContainer = styled.div`
	width: 25%;
	display: flex;
	flex-direction: column;
	padding: 10px;
	margin: 10px 0 20px 0;
	box-shadow: 10px 0 20px -15px rgba(0, 0, 0, 0.1);

	@media (max-width: 768px) {
		width: 50%;
	}
`;

export const ImgBlock = styled.div`
	width: 100%;
`;

export const CardImage = styled.img`
	width: 100%;
	height: auto;
`;

export const CardTitle = styled.h3`
	font-size: 18px;
	font-weight: 700;
	line-height: 24px;
	height: 72px;
	margin: 10px 0;
`;

export const Description = styled.div`
	background-color: #f0f0f0;
	font-size: 14px;
	/* font-weight: 600; */
	line-height: 16px;
	height: 70px;
	overflow: hidden;
	padding: 4px;
	margin: 10px 0;

	@media (max-width: 768px) {
		margin: 0;
		flex-grow: 0;
		flex-shrink: 1;
		flex-basis: 100%;
		height: 100%;
	}
`;

export const PriceContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
	border-bottom: 1px dashed #ccc;
	font-size: 14px;

	@media (max-width: 768px) {
		& > span {
			display: none;
		}
	}
`;

export const CardDetails = styled.div`
	@media (max-width: 768px) {
		display: flex;
	}
`;

export const BuyNowText = styled.span`
	@media (max-width: 768px) {
		display: none;
		width: 0;
		height: 0;
	}
`;
export const BuyNowTextTablet = styled.span`
	display: none;

	@media (max-width: 768px) {
		display: block;
		border: 10px;
	}
`;
