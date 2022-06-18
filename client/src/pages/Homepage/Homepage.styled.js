import styled from "styled-components";

export const StyledHomepage = styled.div`
    .explore-categories:nth-child(2n) .wrapper {
        flex-direction: row-reverse;
    }

    .explore-categories:nth-child(2n+1) .wrapper {
        .explore-details {
            margin-left: 20%;
        }
    }
`;