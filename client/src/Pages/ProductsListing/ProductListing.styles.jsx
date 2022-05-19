import styled from 'styled-components';

export const ProductPageContainer = styled.div`
    display: flex;
    padding:0 10rem;
    flex-direction: row;
`;
export const ProductPageSidebar = styled.div`
    flex-basis: 15rem;
    background: #efefef;
    min-height: 83.9vh;
;
`;
export const ProductPageProductsContainer = styled.div`
    display:grid;
    grid-template-Columns:repeat(4,1fr);
    flex:1;
`;

export const SideBar = styled.ul`
    list-style-type: none;
`;

export const SideBarItem = styled.li`
    padding: 1rem;
    border-bottom: 1px solid #9f9f9f;
`;