import styled from "styled-components";

export const StyledOverlay = styled.div`
    position: fixed;
    width: ${(props) => (props.color ==='aliceblue') ? '30%' : '100%'};
    height: 100%;
    top: ${(props) => (props.color ==='aliceblue') ? '63px' : '0'};
    left: ${(props) => (props.color ==='aliceblue') ? 'unset' : '0'};
    right: ${(props) => (props.color ==='aliceblue') ? '0%' : '0'};
    bottom: 0;
    background-color: ${(props) => (props.color ==='aliceblue') ? props.color : props.theme.colors.OVERLAY};
    text-indent: -9999px;
    z-index: ${(props) => (props.color ==='aliceblue') ? '2' : '3'};

    @media(max-width: ${(props) => props.theme.breakpoints.TAB}) {
        display: none;
    }

    @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
        width: 35%;
    }

    @media(max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
        top: 50px;
        width: 40%;
    }
`;