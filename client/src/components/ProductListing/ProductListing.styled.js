import styled from "styled-components";

export const StyledProductListing = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    li {
        width: 24%;
        margin: 3px;
        border-bottom: 1px dashed;

        @media(max-width: ${(props) => props.theme.breakpoints.SM_LAPTOP}) {
           width: 30%;
        }
    }
`;
