import  styled from 'styled-components'

const StyledMenuList = styled.ul`
   
    li{
        list-style:none;
        border-bottom:1px solid #cec8c8;
        padding:10px;
        text-align:center;
    }
`;


const StyledMenu = styled.div`
    background-color: #f0f0f0;
    display:flex;
    flex-direction:column;
    /* padding:10px; */
    height:100vh;
    width:30.333%;
`;


export  { StyledMenu, StyledMenuList }