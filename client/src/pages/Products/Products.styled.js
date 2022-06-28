import styled from "styled-components";

export const StyledProducts = styled.div`
    .wrapper {
        display: flex;

        @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
            flex-direction: column;
            width: 100%;
        }

        aside {
            width: 30%;
            background: ${(props) => props.theme.colors.GRAY};

            @media(max-width: ${(props) => props.theme.breakpoints.TAB}) {
                width: 35%;
            }
        }

        @media(max-width: ${(props) => props.theme.breakpoints.TAB}) {
            width: 100%;
        }

        .product-listing {
            width: 100%;

            @media(max-width: ${(props) => props.theme.breakpoints.TAB}) {
                margin: 0 auto;
                width: 90%;
            }

            @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
                width: 100%;
            }

        }
    }
`;