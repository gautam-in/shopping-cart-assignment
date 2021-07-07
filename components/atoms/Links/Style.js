import  styled from 'styled-components'

const StyledLink = styled.a`
    color:#6c707c;
    font-family: 'Arial Narrow Bold';
    padding:5px;
`

const StyledMenuList = styled.ul`
    display:flex;
    flex-direction:column;
    li{
        list-style:none;
        border-bottom:1px solid #cec8c8;
    }
`;


const StyledMenu = styled.div`
    background-color: #f0f0f0;
    display:flex;
    flex-direction:column
`;


const StyledExplore = styled.a`
    background:#bf2957;
    font-family:'Myriad Pro Regular';
    color:#fff;
    border:none;
    text-align: center;
    width:auto;
    height:30px;
    padding:6px;
`;

export {StyledLink,StyledMenu,StyledMenuList,StyledExplore}