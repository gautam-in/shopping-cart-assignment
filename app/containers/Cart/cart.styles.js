import styled from 'styled-components';

export const CartStyles = styled.div`
  background: var(--lightestgrey);
  position: fixed;
  height: 100%;
  top: 100px;
  right: 0;
  width: 40%;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  z-index: 5;
  ${(props) => props.open && `transform: translateX(0);`};
  header {
    padding: 1% 3%;
    background: var(--black);
    color: white;
    display: flex;
    align-items: center;
    h4 {
      flex: 1;
    }
    svg {
      cursor: pointer;
    }
  }
  main {
    max-height: 50vh;
    overflow-y: auto;
    height: 100%;
    ::-webkit-scrollbar-thumb {
      background: var(--lightgrey);
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: var(--grey);
    }
  }
  section {
    background-color: white;
    display: flex;
    margin: 0.5rem;
  }
  footer {
    background-color: var(--white);
    color: black;
    position: fixed;
    bottom: 100px;
    width: 100%;
    padding: 2%;
    text-align: center;
    p {
      margin-bottom: 2%;
      margin-top: 0;
    }
  }

  footer {
    .checkout-btn {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .checkout-btn span {
      flex: 1;
      text-align: end;
    }
    .start-shopping-btn {
      text-align: center;
      width: 100%;
    }
  }

  @media only screen and (max-width: 1023px) {
    font-size: 0.8em;
    right: -999999;
    width: 100%;
    padding-top: 2rem;
    header {
      background-color: var(--white);
      color: black;
    }
  }
  @media only screen and (max-width: 767px) {
    font-size: 0.8em;
    top: 50px;
    right: -999999;
    width: 100%;
    footer {
      bottom: 50px;
    }
  }
`;

export const NoItems = styled.main`
  display: flex ;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
