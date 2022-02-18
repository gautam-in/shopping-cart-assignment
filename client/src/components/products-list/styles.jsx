import styled from "styled-components";

export const ProductsListContainer = styled.div`
	padding-left: 15px;
	width: 77%;
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 425px) {
		width: auto;
		padding: 0;
	}
`;
