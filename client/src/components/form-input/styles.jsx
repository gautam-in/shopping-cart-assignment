import styled, { css } from "styled-components";

const subColor = "#aaa";
const mainColor = "#50dae2";

const shrinkLabelStyles = css`
	top: -14px;
	font-size: 14px;
	color: ${mainColor};
`;

export const GroupContainer = styled.div`
	position: relative;
	margin: 45px 0;
	input[type="password"] {
		letter-spacing: 0.3em;
	}
`;

export const FormInputContainer = styled.input`
	background: none;
	background-color: white;
	color: ${subColor};
	font-size: 18px;
	padding: 10px 10px 10px 0px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid ${subColor};
	/* margin: 25px 0; */
	margin: 25px 0 10px 0;

	&:focus {
		border-bottom: 1px solid ${mainColor};
		outline: none;
	}

	&:focus ~ label {
		${shrinkLabelStyles}
	}
`;

export const FormInputLabel = styled.label`
	color: ${subColor};
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	top: 10px;
	transition: 300ms ease all;

	&.shrink {
		${shrinkLabelStyles}
	}
`;

export const ErrorMessage = styled.span`
	font-size: 14px;
	color: red;
`;
