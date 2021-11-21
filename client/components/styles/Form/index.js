import styled from "styled-components";

export const FormWrapper = styled.div`
    min-height: 200px;
    width: 60%;
    margin: 50px auto; 
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;    
    padding: 2.4rem;
    border-radius: 5px;

    @media (max-width: 38em) {
        flex-direction: column;
        text-align: center;
    }
`

export const LoginInfoContainer = styled.div`
    h2 {
        font-size: 2.4rem;
        font-weight: bolder;
        margin: 10px 0;
    }

    p {
        font-size: 1.2rem;
    }
`
export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    flex: 1;

    input {
        margin : 1.8rem 0;   
        border: none;
        padding: 8px 2px;
        font-size: 1.2rem;
        border-bottom: 1px solid grey;
        
        &:focus {
            border : none;
        }
    }

    button {
        border: none;
        padding: 1.2rem;
        border-radius: 2px;
        background-color: palevioletred;
        color: #fff;
        letter-spacing: 1.5px;
        cursor: pointer;
    }
`

