import styled from "styled-components";


export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap:2.2rem;
    
    @media (max-width: 53em) {
        grid-template-columns: 1fr 3fr;
    }

    @media (max-width: 46em) {
        grid-template-columns: 1fr;
    }  
`



