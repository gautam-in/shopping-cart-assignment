import styled from "styled-components";

export const StyledOverlay = styled.div`
    position: fixed;
    width: ${(props) => (props.color ==='white') ? '30%' : '100%'};
    height: 100%;
    top: ${(props) => (props.color ==='white') ? '63px' : '0'};
    left: ${(props) => (props.color ==='white') ? 'unset' : '0'};
    right: ${(props) => (props.color ==='white') ? '0%' : '0'};
    bottom: 0;
    background-color: ${(props) => props.color ? props.color : props.theme.colors.OVERLAY};
    text-indent: -9999px;
    z-index: 2;
`;