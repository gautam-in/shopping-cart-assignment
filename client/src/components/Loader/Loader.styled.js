import styled, { keyframes } from 'styled-components';

const skChase = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const skChaseDot = keyframes`
  80%,
  100% {
    transform: rotate(360deg);
  }
`;

const skChaseDotBefore = keyframes`
  50% {
    transform: scale(0.4);
  }
  100%,
  0% {
    transform: scale(1);
  }
`;

const LoaderStyle = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  animation: ${skChase} 2.5s infinite linear both;
  left: 50%;
  top: 50%;

  .skChaseDot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: ${skChaseDot} 2s infinite ease-in-out both;
    &:before {
      content: '';
      display: block;
      width: 25%;
      height: 25%;
      background-color: ${(props) => props.theme.colors.BLACK};
      border-radius: 100%;
      animation: ${skChaseDotBefore} 2s infinite ease-in-out both;
    }
    &:nth-child(1) {
      animation-delay: -1.1s;
      &:before {
        animation-delay: -1.1s;
      }
    }
    &:nth-child(2) {
      animation-delay: -1s;
      &:before {
        animation-delay: -1s;
      }
    }
    &:nth-child(3) {
      animation-delay: -0.9s;
      &:before {
        animation-delay: -0.9s;
      }
    }
    &:nth-child(4) {
      animation-delay: -0.8s;
      &:before {
        animation-delay: -0.8s;
      }
    }
    &:nth-child(5) {
      animation-delay: -0.7s;
      &:before {
        animation-delay: -0.7s;
      }
    }
    &:nth-child(6) {
      animation-delay: -0.6s;
      &:before {
        animation-delay: -0.6s;
      }
    }
  }
`;

export default LoaderStyle;
