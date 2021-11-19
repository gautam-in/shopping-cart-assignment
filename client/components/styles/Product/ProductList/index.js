import styled from "styled-components";


export const ProductListWrapper = styled.div`
    display: grid;
    row-gap:1.8rem;
    grid-template-columns: repeat(3, 1fr);
    
    @media (max-width: 60em) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 38em) {
        grid-template-columns: 1fr;
    }
`

