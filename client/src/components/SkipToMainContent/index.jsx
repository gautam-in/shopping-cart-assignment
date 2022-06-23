import React from 'react'
import { StyledSkipContent } from './SkipToMainContent.styled';

const SkipToMainContent = () => {
    return (
        <StyledSkipContent id='skiptocontent'>
            <a href="#maincontent"> skip to main content</a>
        </StyledSkipContent>
    )
}

export default SkipToMainContent;