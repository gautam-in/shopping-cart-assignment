import styled from "styled-components";

export const StyledProductListing = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    @media(max-width: ${(props) => props.theme.breakpoints.TAB}) {
        justify-content: center;
    }

    li {
        width: 24%;
        margin: 3px;
        border-bottom: 1px dashed;

        @media(max-width: ${(props) => props.theme.breakpoints.SM_LAPTOP}) {
           width: 30%;
        }

        @media(max-width: ${(props) => props.theme.breakpoints.TAB}) {
            width: 45%;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
        }
    }
`;
