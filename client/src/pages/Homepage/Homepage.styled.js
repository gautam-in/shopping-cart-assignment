import styled from "styled-components";

export const StyledHomepage = styled.div`

    main {
        display: flex;
        flex-direction: column;
    }

    .bakery-cakes-dairy .wrapper,
    .beauty-hygiene .wrapper {
        flex-direction: row-reverse;
        figure {
            margin-left: 20%;
        }
    }

    .fruit-and-veg .wrapper,
    .beverages .wrapper,
    .baby .wrapper {
        .explore-details {
            margin-left: 20%;
        }
    }
`;