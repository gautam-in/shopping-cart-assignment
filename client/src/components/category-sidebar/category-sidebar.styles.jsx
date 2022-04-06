import styled from 'styled-components';

const offWhite = '#eaeaea';
const mediumGray = '#848484';

export const CategorySidebarContainer = styled.div`
  background-color: ${offWhite};
  height: 100%;
`;

export const CategoryLink = styled.h2`
  font-size: 1.25rem;
  color: ${mediumGray};
  padding: 0.5rem 2rem;
  border-bottom: 1px solid;
  width: 70%;
  margin-left: auto;
  font-weight: 200;
`;
