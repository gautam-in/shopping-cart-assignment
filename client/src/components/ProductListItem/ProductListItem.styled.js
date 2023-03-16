import styled from "styled-components";

export const ProductListItemContainer = styled.li`
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    align-self: normal;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
    border-bottom: 1px dashed black;
    @media(max-width: 30rem) {
     flex: 1 1 100%
    }
    @media(min-width: 30rem) {
    width: calc(50% - 2rem);
    }
    @media(min-width: 65rem) {
        width: calc(33% - 2rem);
    }
    @media(min-width: 95rem) {
        width: calc(25% - 2rem);
    }
`
export const ProductHeading = styled.h3`
    height: 3rem;
`

export const ProductImage = styled.img`
    width: 100%;
    max-width: 200px;
`

export const ProductContent = styled.div`
    width: 100%;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    /* padding: 1rem; */
    `

export const ProductDescription = styled.p`
    background-color: #E5E5E5;
    flex: 1 1 auto;
    line-height: 1.5;
    padding: 0.5rem;
    text-align: left;
`

export const ProductPrice = styled.div`
`

export const ProductBuyButton = styled.button`
    margin-bottom: 0.5rem;
    padding: 0.8rem 1.2rem;
    color: white;
    border: none;
    background-color: #ab4747;
    cursor: pointer;
    transition: all 100ms ease-in-out;
    :hover{
        transform: scale(1.02);
    }
`