import  styled from 'styled-components'

const StyledMenu = styled.div`
    background-color: #f0f0f0;
    display:flex;
    flex-direction:column;
    /* padding:10px; */
    height:100vh;
    width:30.333%;
    @media(max-width: 480px) {
      display:none;
    }
`;


const StyledMenuList = styled.ul`
   display:flex;
   flex-direction:column;
   padding: 0 0 0 0;
    li{
        list-style:none;
        border-bottom:1px solid #cec8c8;
        padding:10px;
        text-align:center;
    }
   
`;


const Container = styled.div`
    position: relative;
    display:none;
    width:100%;
    @media(max-width: 480px) {
        display:inline-block;
    }
    
`;

const Dropdown = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    background-color: ${({theme,dropDownTheme})=>theme.dropdown[dropDownTheme].backgroundColor};
    color: ${({theme,dropDownTheme})=>theme.dropdown[dropDownTheme].color};
    padding: ${({theme,dropDownTheme})=>theme.dropdown[dropDownTheme].padding};
    font-size: ${({theme,dropDownTheme})=>theme.dropdown[dropDownTheme].fontSize};
    border: ${({theme,dropDownTheme})=>theme.dropdown[dropDownTheme].border};;
    cursor: pointer;
    width:100%;
`;


const DropdownContent = styled.div`
     display: ${({display})=> (display ? 'block' : 'none')};
     position: absolute;
     background-color: #f9f9f9;
     min-width: 100%;
     box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
     z-index: 1;
     a{
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
     }

     a:hover{
        background-color: #f1f1f1
     }
`;




export  { StyledMenu, StyledMenuList, Container,Dropdown,DropdownContent }