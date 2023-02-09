import styled from "styled-components";

export const CartListItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: white;
    align-items: flex-end;
`    

export const ItemInfoWrapper = styled.div`
    display: flex;
    flex: 1;
` 
export const ItemImage = styled.img`
    width: 30%;
    max-width: 100px;
` 
export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    justify-content: space-evenly;
    @media (max-width: 400px) {
        gap: 0.5rem;
    }
` 
export const ItemName = styled.div`
    /* font-weight: 600; */
` 
export const ItemQuantityWrapper = styled.div`
    /* padding: 1rem; */
    display: flex;
    align-items: center;
    gap: 0.5em;
` 
export const ItemCalcButton = styled.button`
    display: flex;
    font-size: 1.1rem;
    padding: 0.3rem 0.6rem;
    color: white;
    border: none;
    background-color: #ab4747;
    cursor: pointer;
    border-radius: 50%;
    cursor: pointer;
    transition: all 100ms ease-in-out;

    :hover{
        transform: scale(1.02);
    }
    @media (max-width: 400px) {
        padding: 0.2rem 0.5rem;
    }
    @media (max-width: 780px) {
        border-radius: 5px;
    }
` 

export const ItemTotalPrice = styled.div`
    font-size: 1.01rem;
    font-weight: 600;
`