import styled from 'styled-components';

export const StyledDetails = styled.details`
  margin: 10px auto 50px;
  padding: 25px 1.5%;
  width: 50%;
  max-width: calc(100% - 2rem);
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.ERROR_BOUNDARY_BG};
  font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.CTA_COLOR};
  color: ${(props) => props.theme.colors.WHITE};
  -webkit-transition: background-color 0.15s;
  transition: background-color 0.15s;
  user-select: none;

  > :last-child {
    margin-bottom: 1rem;
  }

  &[open] {
    background-color: ${(props) => props.theme.colors.CTA_COLOR};
  }

  summary {
    padding: 10px 1%;
    display: block;
    position: relative;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
    letter-spacing: 1.4px;

    & span {
      color: ${(props) => props.theme.colors.GRAY};
    }

    &::after {
      width: 0.75em;
      height: 2px;
      position: absolute;
      top: 50%;
      right: 0;
      content: '';
      background-color: currentColor;
      text-align: right;
      transform: translateY(-50%);
      transition: transform 0.2s ease-in-out;
    }
  }
`;

export const StyledCode = styled.code`
  padding: 0.2em;
  border-radius: 3px;
  font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
  font-size: 14px;
  text-transform: lowercase;
  color: ${(props) => props.theme.colors.WHITE};

  pre > & {
    display: block;
    padding: 1em;
    margin: 0;
  }
`;

export const StyledWentWrong = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  .search-message-empty-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 4.5em;
  }

  .search-message-empty-decal {
    margin-right: 2rem;
    font-size: 6rem;
    transform: rotate(90deg);
  }

  .search-message-empty-message {
    font-size: 1.5em;
    text-rendering: optimizeLegibility;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
