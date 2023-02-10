import styled from "styled-components";

export const CategoryListItemWrapper = styled.div`
    padding: 1rem;
    box-shadow: rgb(0 0 0 / 45%) 0px 19px 40px -46px;
    display: flex;
    justify-content: space-between;
    align-items: center;   
`    

export const ImageWrapper = styled.div`
    order: ${props => props.order % 2 === 0 ? 1 : -1};
    flex-basis: 30%;
`  
export const CategoryImage = styled.img`
    width: 100%;
    max-width: 250px;
    min-width: 135px;
`  

export const CategoryInfo = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-evenly;
    flex: 1;
`  

export const CategoryExploreButton = styled.button`
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