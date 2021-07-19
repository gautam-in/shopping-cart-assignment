import styled from "styled-components";

const ButtonStyle = styled.div`

     display:flex;
     justify-content: center;
    
    .variant_category {
        background: ${({theme:{colors} })=> colors.btnColor};
        font-family:'Myriad Pro Regular';
        color:${({theme:{colors} })=> colors.white};
        border:none;
        text-align: center;
        width:auto;
        height:30px;
    }

    .variant_signin {
        background:#bf2957;
        font-family:'Myriad Pro Regular';
        color:#fff;
        border:none;
        text-align: center;
        width:100%;
        height:30px;
        margin-top:20px;
    }

    .variant_product {
        font-family:${({theme,btnTheme})=>theme.buttons[btnTheme].fonts};
        background:${({theme,btnTheme})=>theme.buttons[btnTheme].background};
        color:${({theme,btnTheme})=>theme.buttons[btnTheme].color};
        border:${({theme,btnTheme})=>theme.buttons[btnTheme].border};
        font-size:${({theme,btnTheme})=>theme.buttons[btnTheme].fontSize};
        padding:${({theme,btnTheme})=>theme.buttons[btnTheme].padding};
        margin-top:${({theme,btnTheme})=>theme.buttons[btnTheme].marginTop}; ;
        text-align: center;
        width:100%;
        height:auto;
        
        
    }
    
`;

export {ButtonStyle}