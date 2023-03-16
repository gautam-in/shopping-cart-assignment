import styled from "styled-components";

export const ProductCategoryFilterListContainer = styled.ul`
    flex: 1;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0rem;
    list-style-type: none;
    max-width: 250px;
    @media (max-width: 768px) {
      display: none;
    }
`   
export const CategoryItem = styled.button`
    text-align: left;
    cursor: pointer;
    width: 100%;
    background-color: transparent;
    border: none;
    font-weight: 500;
    color: #686666;
    padding: 1rem;
    border-bottom: 1px solid #c5c5c5;
    background-color: ${props => props.activeFilter && '#ccc' };
    font-weight: ${props => props.activeFilter && 600 };
    :hover {
        background-color: #ccc;
    }
`   