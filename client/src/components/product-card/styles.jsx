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

	@media (max-width: 475px) {
		width: 100%;
		/* border-bottom: 1px dashed #ccc; */
		box-shadow: none;
		/* padding-bottom: 15px;
		margin: 10px 10px 20px 10px; */
	}
`;

export const ImgBlock = styled.div`
	width: 100%;

	@media (max-width: 768px) {
		flex: 1 1 0;
	}
`;

export const CardImage = styled.img`
	width: 100%;
	height: auto;
`;

export const CardTitle = styled.h3`
	font-size: 18px;
	font-weight: 700;
	height: 66px;
	margin: 10px 0;
	overflow: hidden;

	@media (max-width: 425px) {
		overflow: hidden;
		white-space: nowrap;
		margin: 20px 0;
		height: auto;
	}
`;

export const DescriptionBlock = styled.div`
	@media (max-width: 768px) {
		flex: 1 1 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
`;

// export const DescriptionBlock = styled.div`
// 	font-size: 14px;
// 	line-height: 18px;
// 	height: 78px;
// 	overflow: hidden;
// 	padding: 4px;
// 	margin: 10px 0;
// 	// new
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-between;

// 	@media (max-width: 768px) {
// 		margin: 0;
// 		flex-grow: 0;
// 		flex-shrink: 1;
// 		flex-basis: 100%;
// 		height: 100%;
// 	}

// 	@media (max-width: 425px) {
// 		// new
// 		display: block;
// 	}
// `;

export const CardDetails = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 768px) {
		flex-flow: row;
	}
`;

export const Description = styled.div`
	background-color: #f0f0f0;
	line-height: 20px;
	height: 88px;
	overflow: hidden;
	text-overflow: clip;
	padding: 5px;
	overflow: hidden;
	font-size: 14px;
`;

export const PriceContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
	border-bottom: 1px dashed #ccc;
	font-size: 14px;

	@media (max-width: 768px) {
		display: none;
	}
`;

// export const BottomBorder = styled.div`
// 	height: 1px;
// 	margin-top: 20px;
// 	border-bottom: 1px dashed #ccc;

// 	@media (max-width: 768px) {
// 	}
// `;

export const BuyNowText = styled.span``;

export const BuyNowFullText = styled.span`
	overflow: hidden;
	white-space: nowrap;
	font-size: 14px;

	@media (min-width: 769px) {
		display: none;
	}
`;
