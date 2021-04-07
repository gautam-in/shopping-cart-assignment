import styled from "styled-components";
const LogoStyles = styled.div`
    {        
        margin:0;
    }
    img  {
        width:100px;
        margin:0 2em;
    }
    a {
        color:white;
        text-decoration:none;
        text-transform:uppercase;
        padding: 0.5rem 1rem;
    }
    
    @media (max-width: 420px) {
        img {
            width:50px;
            margin:0;
        }
    }
    `;
export default LogoStyles;