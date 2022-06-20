import styled from 'styled-components';

export const FourZeroFourContainer = styled.div`
  position: relative;
`;

export const FourZeroFourHero = styled.div`
  border-radius: 50%;
  color: ${(props) => props.theme.colors.WHITE};
  text-align: center;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18vw;
  height: 18vw;
  background: ${(props) => props.theme.colors.CTA_COLOR};
  display: block;

  @media screen and (max-width: ${(props) => props.theme.breakpoints[4]}) {
    top: 28%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
    top: 24%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[2]}) {
    top: 20%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[1]}) {
    top: 16%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
    top: 14%;
  }

  h2 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 45px;
    line-height: 3.2vw;
    font-family: ${(props) => props.theme.fonts.DOSIS}, sans-serif;
    color: ${(props) => props.theme.colors.WHITE};

    @media screen and (max-width: ${(props) => props.theme.breakpoints[3]}) {
      font-size: 38px;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints[2]}) {
      font-size: 32px;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints[1]}) {
      font-size: 25px;
    }
  }
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
