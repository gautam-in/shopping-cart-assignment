import React from 'react';
import styled from 'styled-components';

const SideBarWrapper = styled.aside`
    background: #ddd;
    min-width: 20%;
    min-height: 100vh;
`;

const SideBarItem = styled.div`
    border-bottom: 1px solid #4d4d4d;
    padding: 10px;
    font-size: .9rem;
    width: 100%;
    background-color: transparent;
    text-align: left;
    color: #4d4d4d;
    &:hover {
        background-color: grey;
        cursor: pointer;
        color: white;
      }
`;

export default function SideBar({filteredProductType,handleProduct}){
    return(
        <SideBarWrapper data-testid='side-bar'>
            {
                (filteredProductType || []).map(product=>{
                    return <SideBarItem key={product.id} onClick={()=>handleProduct(product.id)}>{product.name}</SideBarItem>
                })
            }
        </SideBarWrapper>
    )
}