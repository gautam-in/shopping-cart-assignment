import { css } from 'styled-components';

export const FlexMixin = (justifyContent, alignItem, flexDir) => css`
  display: flex;
  flex-direction: ${flexDir ? flexDir : 'row'};

  align-items: ${alignItem};
  justify-content: ${justifyContent};
`;

export const FlexHorizontalCenter = () => css`
  ${FlexMixin('center', 'center', 'column')};
`;

export const GridMixin = (
  columnGridTemplate,
  justifyContent,
  alignItem,
  gridGap
) => css`
  display: grid;
  grid-template-columns: ${columnGridTemplate};
  justify-content: ${justifyContent};
  align-items: ${alignItem};
  grid-gap: ${gridGap ? gridGap : 0};
`;
