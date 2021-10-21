import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
`;


export default function Form({children}){
    return (
        <FormWrapper data-testid='form'>
            {children}
        </FormWrapper>
    )
}