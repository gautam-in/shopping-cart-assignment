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

export default function Dropdown({ itemList, handleClick }) {
    const [dropdownOpen, setdropdownOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(itemList && itemList[0].name);

    return (
        <>
        <DROP_DATA_STYLE onClick={() => setdropdownOpen(true)}>
                        <p>
                            {currentItem}
                        </p>
                        <span>
                            ▼
                        </span>
        </DROP_DATA_STYLE>
        { dropdownOpen && 
            itemList && itemList.map((item) => {
                if(item.name !== currentItem){

                    return ( 
                        <DROP_DATA_STYLE key={item.id} onClick={() => {handleClick(item.id); setCurrentItem(item.name); setdropdownOpen(false)}}>
                        <p>
                            {item && item.name}
                        </p>
                    </DROP_DATA_STYLE>
                )
            }
            })
        }
        </>

    )
}