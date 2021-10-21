import styled from "styled-components";

export const SignUpWrapper = styled.main`
    max-width: 60%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 3rem;

    @media (max-width: 480px){
        flex-direction: column;
        max-width: 90%;
    }
`;
export const SignUpContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    & button {
        margin-top: 10px;
        width: 100%;
    }
`;
export const SignUpHeader = styled.h3`
    font-size: 1.5rem;
    text-align: left;
`;
export const SignUpInfo = styled.h3`
    font-size: .9rem;
    margin-top: 1rem;
    text-align: left;
`;