import { useState } from "react";
import styled from "styled-components";
import useProduct from "../../Hooks/useProduct";

const DROP_DATA_STYLE = styled.div`
    display: grid;
    grid-template-columns: 422px 0.9fr;
    color: white;
    background-color: #d42559;
    align-items: center;
    justify-items: left;
    width: 100%;
    height: 6vh;
    padding-left: 11px;
`

export default function Dropdown({ itemList }) {
    const { handleSideBarClick, selectedProducts } = useProduct();
    const [dropdownOpen, setdropdownOpen] = useState(false);

    return (
        <>
        <DROP_DATA_STYLE onClick={() => setdropdownOpen(true)}>
                        <p>
                            {itemList && itemList[0].name}
                        </p>
                        <span>
                            ▼
                        </span>
        </DROP_DATA_STYLE>
        { dropdownOpen && 
            itemList && itemList.map((item) => {
                return (
                    <DROP_DATA_STYLE>
                        <p>
                            {item && item.name}
                        </p>
                    </DROP_DATA_STYLE>
                )
            })
        }
        </>

    )
}