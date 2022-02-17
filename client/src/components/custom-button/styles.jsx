import styled, { css } from "styled-components";

const primaryColor = "#bf2957";

const buttonStyles = css`
	height: 35px;
	line-height: 35px;
	padding: 0 25px 0 25px;
`;

const authButtonStyles = css`
	width: 100%;
	height: 50px;
	line-height: 50px;
	padding: 0 25px 0 25px;
	font-size: 16px;
`;

const cartButtonStyles = css`
	border-radius: 50%;
	transition: none;

	&:hover {
		background-color: ${primaryColor};
		color: #fff;
	}
`;

const getButtonStyles = (props) => {
	if (props.isAuth) {
		return authButtonStyles;
	}
	return props.isCart ? cartButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
	width: auto;
	cursor: pointer;
	display: flex;
	justify-content: center;
	font-family: "Dosis";
	border-radius: 2px;
	border: 1px solid transparent;
	background-color: ${primaryColor};
	color: white;
	transition: background-color 500ms ease-in, border 500ms ease-in,
		color 500ms ease-in;

	&:hover {
		background-color: #fff;
		color: ${primaryColor};
		border: 1px solid ${primaryColor};
	}

	&:disabled,
	&[disabled] {
		opacity: 0.7;
		cursor: not-allowed;
		pointer-events: none;
	}

	${getButtonStyles}
`;
