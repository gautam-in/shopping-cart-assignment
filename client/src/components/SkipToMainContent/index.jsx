import React from 'react'
import { StyledSkipContent } from './SkipToMainContent.styled';

const SkipToMainContent = () => {
    return (
        <StyledSkipContent id='skiptocontent'>
            <a href="#maincontent" title='skip to main content'> skip to main content</a>
        </StyledSkipContent>
    )
}

export default SkipToMainContent;