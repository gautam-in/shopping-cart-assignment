import styled from 'styled-components'
import {primary,secondary,white,gray} from '../../../theme/colors'

const TextStyled = styled.div`
    
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 100%;
    
    .form_field{
        font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 2px solid ${gray};
        outline: 0;
        font-size: 1.3rem;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;

        &::placeholder {
            color: transparent;
        }

        &:placeholder-shown ~ .form__label {
            font-size: 1.3rem;
            cursor: text;
            top: 20px;
        }

    }

    .form_label {
        position: absolute;
        top: 32px;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: ${gray};
    }

    .form_field:focus {
        ~ .form_label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 1rem;
            color: ${primary};
            font-weight:700;    
        }
        padding-bottom: 6px;  
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, ${primary},${secondary});
        border-image-slice: 1;
    }
    /* reset input */
    .form_field{
    &:required,&:invalid { box-shadow:none; }
    }
`;

export default TextStyled