import styled from "styled-components";

export const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
	z-index: 0;

	@media (max-width: 768px) {
		visibility: hidden;
	}
`;

export const LayoutContainer = styled.div``;

export const Content = styled.main`
	max-width: 1080px;
	margin: 0 auto;
`;

export const ModalWrapper = styled.div`
	display: block;
	position: relative;
	min-height: 1px;
	z-index: 2000;
`;
