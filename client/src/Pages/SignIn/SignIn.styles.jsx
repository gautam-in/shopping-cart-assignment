import styled from "styled-components";

export const SignInContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 6rem;
    margin: 4rem 0;
`;

export const SignInMetaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const SignInHeading = styled.h3`
    font-size:2rem;
    font-weight:700;
    margin-bottom: 1rem;
`;

export const SignInMetaData = styled.p`
    font-size:1rem;
    font-weight:500;
`;

export const SignInFormContainer = styled.div`
    flex-basis: 24%;
`;
export const SignInForm = styled.form`
    display: flex;
    flex-direction: column;

    & button:last-child{
        margin-top:1rem;
    }
`;

export const SignInError = styled.p`
    color:red;
    margin-top: 1rem;
`