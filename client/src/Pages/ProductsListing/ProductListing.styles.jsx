import styled from 'styled-components';

export const ProductPageContainer = styled.div`
    display: flex;
    padding:0 10rem;
    flex-direction: row;

    @media only screen and (max-width: 768px) {
        padding: 0rem;
    }

    @media only screen and (max-width: 992px) {
        padding:0 6rem;
    }

    @media only screen and (max-width: 1200px) {
        padding-right:3rem;
    }
    @media only screen and (max-width: 1400px) {
        padding:0;
    }
`;
export const ProductPageSidebar = styled.div`
    flex-basis: 15rem;
    background: #efefef;
    min-height: 83.9vh;
    display:block;

    @media only screen and (max-width: 600px) {
        display:none;
    }
;
`;
export const ProductPageProductsContainer = styled.div`
    display:grid;
    grid-template-Columns:repeat(4,1fr);
    flex:1;

    @media only screen and (max-width: 600px) {
        grid-template-Columns:repeat(1,1fr);
    }

    @media only screen and (min-width00px) {
        grid-template-Columns:repeat(2,1fr);
    }
    @media only screen and (min-width: 992px) {
        grid-template-Columns:repeat(3,1fr);
    }

    @media only screen and (min-width: 1200px) {
        grid-template-Columns:repeat(4,1fr);
    }
`;

export const SideBar = styled.ul`
    list-style-type: none;
`;

export const SideBarItem = styled.li`
    padding: 1rem;
    border-bottom: 1px solid #9f9f9f;

    &:hover{
        background: #858585;
        color: #fff;
    }

    &.active{
        background: #464545;
        color:#fff;
    }
`;