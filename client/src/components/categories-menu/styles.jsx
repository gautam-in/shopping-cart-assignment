import styled from "styled-components";

export const CategoriesContainer = styled.div`
	width: 23%;
	background-color: #eaeaea;
	color: #555;

	@media (max-width: 425px) {
		display: none;
	}
`;

export const CategoriesContainerMobile = styled.div`
	display: none;

	@media (max-width: 425px) {
		display: block;
	}
`;

export const ListItem = styled.div`
	border-bottom: 1px solid #ccc;
	margin-left: 5px;
	padding: 12px;
	cursor: pointer;
	background-color: ${(props) => (props.active ? "#FBFBFB" : "")};
`;
