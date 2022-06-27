import styled from 'styled-components';

export const FourZeroFourContainer = styled.div`
  position: relative;
`;

export const FourZeroFourBody = styled.div`
  text-align: center;
  padding: 45px 0;
  margin: 60px auto;

  h3 {
    font-size: 42px;
    line-height: 1.2;
    color: ${(props) => props.theme.colors.CTA_COLOR};
    font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
    position: relative;
    margin-bottom: 40px;

    &::after {
      position: absolute;
      top: 50px;
      left: calc((100% - 10rem) / 2);
      width: 10rem;
      height: 3px;
      background: #dcdddf;
      content: '';
    }
  }

  p {
    font-size: 28px;
    line-height: 1.2;
    color: ${(props) => props.theme.colors.BLACK};
    font-family: ${(props) => props.theme.fonts.DOSIS},sans-serif;
    position: relative;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[1]}) {
    h3 {
      font-size: 32px;
    }
    p {
      font-size: 20px;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 18px;
    }
  }
`;
