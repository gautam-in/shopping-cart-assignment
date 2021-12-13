import React from 'react'
import { ButtonContainer } from './Button.styled'

export const Button = ({children, ...props}) => {
    return (
        <ButtonContainer {...props}>
            {children}
        </ButtonContainer >
    )
}
