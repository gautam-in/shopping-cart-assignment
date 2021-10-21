import styled from "styled-components";

export const SignInWrapper = styled.main`
    max-width: 70%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 3rem;
    @media (max-width: 480px){
        flex-direction: column;
        max-width: 90%;
    }
`;


export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    & button {
        margin-top: 10px;
        width: 100%;
    }

`;

export const SignInHeader = styled.h3`
    font-size: 1.5rem;
    text-align: left;
`;

export const SignInInfo = styled.h3`
    font-size: .9rem;
    margin-top: 1rem;
    text-align: left;
`;