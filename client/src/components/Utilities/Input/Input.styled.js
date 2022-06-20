import styled from "styled-components";

export const StyledInput = styled.div`
    position: relative;

    .error {
        display: none;
        position: absolute;
        left: 0%;
        bottom: -20px;
        color: red;
        font-size: 12px;
        text-transform: lowercase;
    }

    .form-input {
        width: 60%;
        height: 40px;
        position: relative;
        overflow: hidden;
    }

    input {
        width: 100%;
        height: 100%;
        color: ${(props) => props.theme.colors.BLACK};
        padding-top: 20px;
        border: none;
        outline: none;
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
            border-bottom: 3px solid ${(props) => props.theme.colors.CADET_BLUE};
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
    input:valid + .label-name .content-name {
        transform: translateY(-180%);
        font-size: 10px;
        color: ${(props) => props.theme.colors.CADET_BLUE};
    }

    input:focus:invalid + .label-name::after {
        border-bottom-color: ${(props) => props.theme.colors.RED};
    }

    input:focus + .label-name::after,
    input:valid + .label-name::after {
        transform: translateX(0%);
    }
`;