import styled from "styled-components";

export const AuthBlock = styled.div`
	display: flex;
	margin-bottom: 20px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const InfoBlock = styled.div`
	padding: 60px 80px;

	@media (max-width: 768px) {
		padding: 20px;
	}
`;

export const Title = styled.h1`
	font-weight: 700;
`;

export const SubTitle = styled.span`
	font-weight: 600;
`;
