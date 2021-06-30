import styled from "styled-components";

const ButtonStyle = styled.button`
    background:#bf2957;
    font-family:'Myriad Pro Regular';
    color:#fff;
    border:none;
    text-align: center;
    width:auto;
    height:30px;
`; 

const Button = ({children})=>{
    return (<ButtonStyle>
        {children}    
    </ButtonStyle>)
}


export {
    Button
}