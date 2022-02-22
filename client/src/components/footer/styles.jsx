import styled from "styled-components";

export const FooterWrapper = styled.footer`
	background-color: #eaeaea;
	padding: 10px 0;
	font-size: 14px;
	font-weight: 600;
`;

export const FooterContent = styled.div`
	max-width: 1080px;
	margin: 0 auto;

	@media (max-width: 768px) {
		text-align: center;
	}
`;
