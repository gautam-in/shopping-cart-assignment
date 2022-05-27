import styled from "styled-components";

 const InputFormWrapper = styled.div`
    display: flex;
    margin: 70px;

    .signup_label {
        width: 40%;
        padding-left: 15%;
    }

    .signup-form {
        width: 50%;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        .signup_label {
            width: 100%;
            padding-left: 0;
        }
        
        .signup-form {
            width: 100%;
        }
    }

`

export default InputFormWrapper;