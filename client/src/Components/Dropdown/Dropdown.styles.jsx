import styled from "styled-components";

export const CategoriesContainer = styled.div`
    padding:0 20rem;

    @media only screen and (max-width: 600px) {
        padding:0 1rem;
    }

    @media only screen and (min-width: 600px) {
        padding:0 6rem;
    }
    
    @media only screen and (min-width: 768px) {
        padding:0 10rem;
    }
    
    @media only screen and (min-width: 992px) {
        padding:0 13rem;
    }
`;

export const DropdownContainer = styled.div`
    width: 100%;
    display:none;
@media only screen and (max-width: 600px) {
        display:block;
    }

`;
export const DropDown = styled.select`
    width: 100%;
    background: rgba(191,41,87,255);
    color: #fff;
    border: none;
    outline: none;
    padding: 0.7rem 1rem;
    font-family: inherit;
    font-size: 1rem;
`;
export const DropdownItem = styled.option`
`;