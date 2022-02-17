import styled from "styled-components";

export const ProductsContainer = styled.div`
	width: 23%;
	background-color: #eaeaea;
	color: #555;
`;

export const ListItem = styled.div`
	border-bottom: 1px solid #ccc;
	margin-left: 5px;
	padding: 12px;
	cursor: pointer;
	background-color: ${(props) => (props.active ? "#FBFBFB" : "")};
`;
