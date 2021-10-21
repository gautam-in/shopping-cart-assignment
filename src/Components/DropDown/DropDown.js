import React, { useState } from 'react';
import styled from 'styled-components';

const DropDownItem = styled.div`
    border: none;
    color: #fff;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    background-color: #d42559;
    padding: 5px;
    font-size: .9rem;
`;
export default function DropDown({ filteredProductType, handleProduct }) {
    const productTypeList = [{ name: 'All Products', id: '' }, ...filteredProductType]
    const [show, setShow] = useState(false)
    const [currentItem, setCurrentItem] = useState(productTypeList && productTypeList[0].name);

    return (
        <>
            <DropDownItem onClick={() => { setShow(!show) }} data-testid='dropdown'>{currentItem}<span>▼</span></DropDownItem>
            {show && (productTypeList || []).filter(item => item.name !== currentItem).map(product => {
                return <DropDownItem
                    key={product.id}
                    onClick={() => { handleProduct(product.id); setCurrentItem(product.name); setShow(!show) }}
                >
                    {product.name}
                </DropDownItem>
            })
            }
        </>
    )
}