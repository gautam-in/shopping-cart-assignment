import styled from "styled-components";


export const StyledSkipContent = styled.div`    
    padding: 6px;
    position: absolute;
    top: -40px;
    left: 0px;
    color: ${(props) => props.theme.colors.WHITE};
    border-right: 1px solid ${(props) => props.theme.colors.WHITE};
    border-bottom: 1px solid ${(props) => props.theme.colors.WHITE};
    border-bottom-right-radius: 8px;
    background: ${(props) => props.theme.colors.CTA_COLOR};
    -webkit-transition: top 1s ease-out;
    transition: top 1s ease-out;
    z-index: 100;
`;