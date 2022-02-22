import styled from "styled-components";

export const CategoryItemBlock = styled.div`
	display: flex;
	align-items: center;
	padding: 30px 0;
	box-shadow: 0px 20px 20px -20px rgba(0, 0, 0, 0.45);

	&:last-child {
		box-shadow: 0px 0px;
	}
`;

export const CategoryImageBlock = styled.div`
	width: 40%;
`;

export const CategoryImage = styled.img`
	width: 100%;
	height: auto;
`;

export const CategoryDetails = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	flex: 1 0 0;
	text-align: center;
`;

export const Description = styled.span`
	margin-bottom: 30px;
	text-align: center;
	font-weight: 600;
`;

export const Name = styled.h2`
	font-weight: 700;
`;

export const Explore = styled.div`
	font-size: 16px;
`;
