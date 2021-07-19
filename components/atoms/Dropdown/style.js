import styled from 'styled-components'


const Container = styled.div`
    position: relative;
    display:none;
    @media(max-width: 480px) {
        display: inline-block;
    }
    
`;

const DropdownBtn = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    
`;


const DropdownContent = styled.button`
     display: none;
     position: absolute;
     background-color: #f9f9f9;
     min-width: 160px;
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

