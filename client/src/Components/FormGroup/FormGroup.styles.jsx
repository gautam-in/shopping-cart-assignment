import styled,{css} from 'styled-components';

const shrink = css`
    top:-20px;
    font-size: .8rem;
    color: rgb(37, 150, 190);
`;

export const FormGroupComp = styled.div`
    position: relative;
    margin: 30px 0px;
    transition: all 0.3s;
`;

export const FormLabel = styled.label`
    position: absolute;
    top: 8px;
    left: 0;
    z-index: 10;
    font-size: 1rem;
    transition: 0.3s ease all;

    &.shrink{
        ${shrink}
    }
`;


export const FormInput = styled.input`
    outline: none;
    border-top: none;
    border-right: none;
    border-bottom: 1px solid rgb(51, 51, 51);
    border-left: none;
    border-image: initial;
    background: #fff;
    padding: 0.8rem 0;
    font-size: 1rem;
    transition: 0.3s ease all;

    &:focus{
    border-bottom: 1px solid rgb(37, 150, 190);    
    }

    &:focus ~ label{
    ${shrink}
    }
`;
