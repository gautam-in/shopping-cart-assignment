import styled from "styled-components";

export const StyledSignin = styled.div`
    .wrapper {
        display: flex;
        justify-content: center;

        @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
            flex-direction: column;
        }
    }
`;

export const StyledSigninDetails = styled.div`
    padding: 70px 4%;
    width: 45%;
    margin-left: 4%;

    @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
        padding: 20px 0;
        width: 100%;
    }

    h3 {
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 700;
        font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
    }

    p {
        font-size: 12px;
        line-height: 1.2;
    }
`;


export const StyledForm = styled.form`
    width: 60%;
    padding: 50px 0;

    @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
        width: 100%;
        padding: 0 0 30px 0;
    }

    .button {
        width: 60%;
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 1px solid ${(props) => props.theme.colors.CTA_COLOR};

        @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
            width: 100%;
        }

        &:hover {
            background: ${(props) => props.theme.colors.WHITE};
            color: ${(props) => props.theme.colors.CTA_COLOR};
        }
    }
`;