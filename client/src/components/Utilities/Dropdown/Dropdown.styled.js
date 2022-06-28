import styled from "styled-components";

export const StyledSelect = styled.div`
    .product-select {
        margin-top: 15px;

        &__control {
            background-color: ${(props) => props.theme.colors.CTA_COLOR};
            border-radius: 0px;
        }

        &__indicator,
        &__placeholder,
        &__single-value {
            color: ${(props) => props.theme.colors.WHITE};
        }

        &__indicator-separator {
            display: none;
        }
    }
`;