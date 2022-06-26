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
    
            @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
                width: 100%;
                margin-left: 5%;
            }
        }
    }

    .beverages {
        figure {
            margin-left: 20%;
    
            @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
                width: 100%;
                margin-left: 5%;
            }
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