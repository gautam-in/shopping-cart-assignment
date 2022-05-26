import styled from "styled-components";

export const FooterWrapper = styled.div`
    background: #eaeaea;
    padding: 10px 12%;
    display: flex;

    p {
        font-size: 12px;
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        p {
            font-size: 10px;
        }
    }
`