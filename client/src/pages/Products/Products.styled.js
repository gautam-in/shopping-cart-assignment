import styled from "styled-components";

export const StyledProducts = styled.div`
    .wrapper {
        display: flex;

        aside {
            width: 30%;
            background: ${(props) => props.theme.colors.GRAY};
        }

        .product-listing {
            width: 100%;
        }
    }
`;