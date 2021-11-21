import styled from "styled-components";

export const ProductDetailContainer = styled.div`
    width: 80%;
    margin: 3.6rem auto;
    display: flex;

    @media (max-width: 46em) {
       flex-direction: column;
    }
`

export const DetailContainer = styled.div`
    padding: 1.2rem 3.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .in-stock {
        font-size: 1.6rem;
        color: green;
        margin: 0.6rem 0;
    }

    .out-stock {
        font-size: 1.6rem;
        color: red;
        margin: 0.6rem 0;
    }

    h2 {
        font-size: 1.8rem;
        margin: 0.6rem 0;
    }

    h3{
        font-size: 1.8rem;
        margin: 0.6rem 0;
    }

    p {
        font-size: 1.4rem;
        margin: 0.6rem 0;
    }
`
