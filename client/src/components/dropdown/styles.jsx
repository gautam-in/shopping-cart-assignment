import styled from "styled-components";

export const Selection = styled.div`
	margin: 20px 0 5px 0;
	padding: 15px 10px;
	color: #fff;
	background: #bf2957;
	display: flex;
	justify-content: space-between;
	font-size: 16px;
	font-weight: 600;
`;

export const DropdownList = styled.ul`
	background: #ffffff;
	border: 1px solid #bf2957;
	color: #333;
	font-size: 15px;
	margin: 0;
	padding: 0;
`;

export const ListItem = styled.li`
	list-style: none;
	padding: 10px 15px;
	border-bottom: 1px solid #bf2957;

	&:last-child {
		border-bottom: 0px;
	}
`;
