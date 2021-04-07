import styled from "styled-components";

const HeaderStyles = styled.header`
    display:grid;
    grid-template-columns:auto 1fr;
    justify-items: self-end;
    padding:0 1rem;
    border-bottom: 2px solid black;
    text-align:center;
    .bar{
        display:grid;
        grid-template-columns:auto 1fr;
        justify-content:space-between;
        align-items:center;
    }
    .sub-bar{
        a{            
            padding:12px;
            font-weight:700;
            &:hover{
                color: #c51162;
            }
        }
    }
`;

export default HeaderStyles;