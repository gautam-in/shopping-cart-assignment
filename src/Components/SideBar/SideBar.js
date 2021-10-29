import { useSelector } from "react-redux";
import styled from "styled-components";

const SIDEBAR_STYLE = styled.aside`
    background: #eaeaea;
    min-height: 100vh;
    min-width: 144px;
    max-width: 20%;
`

const SIDEBAR_CONTENT = styled.div`
    border-bottom: 1px solid #4d4d4d;
    padding: 10px;
    font-size: .9rem;
    padding: 10px;
    text-align: left;
    &:hover{
        background-color: grey;
        cursor: pointer;
        color: white;
    }

`

export default function SideBar({itemList, handleClick}){
    return (
        <SIDEBAR_STYLE>
            {
                itemList.map((product) => {
                    return <SIDEBAR_CONTENT key={product.id} onClick={()=>handleClick(product.id)}>{product.name}</SIDEBAR_CONTENT>
                })
            }
        </SIDEBAR_STYLE>
    )
}