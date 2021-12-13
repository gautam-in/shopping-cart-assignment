import React from 'react'
import { CopyrightContainer } from './Copyright.styled'

export const Copyright = ({children, ...props}) => {
    return (
        <CopyrightContainer>
            {children}
        </CopyrightContainer>
    )
}
