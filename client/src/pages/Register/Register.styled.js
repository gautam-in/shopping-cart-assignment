import styled from "styled-components";

export const StyledRegister = styled.div`
    .wrapper {
        display: flex;
        justify-content: center;
    }
`;

export const StyledRegisterDetails = styled.div`
    padding: 60px 4%;
    width: 45%;
    margin-left: 4%;

    h3 {
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 700;
        font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
    }

    p {
        font-size: 12px;
    }
`;


export const StyledRegisterForm = styled.form`
    width: 60%;
    padding: 36px 0;

    .form-input {
        margin: 25px 0;
        padding: 5px 0;
    }

    .button {
        width: 60%;
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 1px solid ${(props) => props.theme.colors.CTA_COLOR};

        &:hover {
            background: ${(props) => props.theme.colors.WHITE};
            color: ${(props) => props.theme.colors.CTA_COLOR};
        }
    }
`;