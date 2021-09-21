import { css } from 'styled-components';

export const FlexMixin = ({ flexDir = 'column', alignItem, justifyContent }) => css`
    display: flex;
    flex-direction: ${flexDir};
    
    align-items: ${alignItem};
    justify-content: ${justifyContent};
`;

export const FlexHorizontalCenter = () => css`
    ${FlexMixin({ alignItem: 'center', justifyContent: 'center' })};
`;

export const GridMixin = ({ columnGridTemplate = 'auto 1fr', alignItem = 'stretch', justifyContent = 'space-between' }) => css`
    display: grid;
    grid-template-columns: ${columnGridTemplate};
    justify-content: ${justifyContent};
    align-items: ${alignItem};
`;