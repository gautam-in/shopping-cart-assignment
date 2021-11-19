import styled from "styled-components";

export const ProductDetailContainer = styled.div`
    width: 80%;
    margin: 3.6rem auto;
    display: flex;
`

export const DetailContainer = styled.div`
    padding: 1.2rem 3.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .in-stock {
        font-size: 1.6rem;
        color: green;
    }

    .out-stock {
        font-size: 1.6rem;
        color: red;
    }

    h2 {
        font-size: 1.8rem;
    }

    p {
        font-size: 1.4rem;
    }
`
