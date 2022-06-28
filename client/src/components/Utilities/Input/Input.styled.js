import styled from "styled-components";

export const StyledInput = styled.div`
    position: relative;

    & > span {
        display: none ;
    }
    .error,
    .note {
        display: block;
        position: absolute;
        left: 0%;
        bottom: -20px;
        color: ${(props) => props.theme.colors.RED};
        font-size: 12px;
        text-transform: lowercase;

        @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
            bottom: -30px;
        }
    }

    .note {
        color: ${(props) => props.theme.colors.BLACK};
    }

    .form-input {
        height: 40px;
        position: relative;
        overflow: hidden;
        margin: 25px 0;
        padding: 5px 0;

        @media(max-width: ${(props) => props.theme.breakpoints.SM_TAB}) {
            width: 100%;
            margin: 40px 0;
        }
    }

    input {
        width: 100%;
        height: 100%;
        color: ${(props) => props.theme.colors.BLACK};
        padding-top: 20px;
        border: none;
        outline: transparent;
    }

    label {
        position: absolute;
        bottom: 0px;
        left: 0%;
        width: 100%;
        height: 100%;
        font-size: 14px;
        pointer-events: none;
        border-bottom: 1px solid ${(props) => props.theme.colors.BLACK};

        &::after {
            content: '';
            position: absolute;
            left: 0px;
            bottom: -1px;
            height: 100%;
            width: 100%;
            border-bottom: 2px solid ${(props) => props.theme.colors.BLACK};
            transform: translateX(-100%);
            transition: transform .3s ease;
        }
    }

    .content-name {
        position: absolute;
        bottom: 10px;
        left: 0;
        transition: all .3s ease;
    }

    input:focus + .label-name .content-name,
    input[aria-invalid='false'] + .label-name .content-name {
        transform: translateY(-180%);
        font-size: 10px;
        color: ${(props) => props.theme.colors.CADET_BLUE};
    }

    input[aria-invalid='true'] + .label-name::after {
        border-bottom-color: ${(props) => props.theme.colors.RED};
    }

    input:focus + .label-name::after,
    input[aria-invalid='false'] + .label-name::after {
        transform: translateX(0%);
    }
`;