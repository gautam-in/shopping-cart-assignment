import styled from 'styled-components';

const CartStyles = styled.div`
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  overflow: 'scroll';
  width: 30%;
  min-width: 200px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${(props) => props.open && `transform: translateX(0);`};
  header {
    border-bottom: 5px solid var(--black);
  }
  footer {
    /* border-top: 10px double var(--black);
    margin-top: 2rem; */
    padding: 20px;
    /* display: grid;
    grid-template-columns: auto auto; */
    align-items: center;
    font-size: 1rem;
    p {
      margin: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }

  @media screen and (max-width: 700px){
    min-width: 280px;
    footer {
    padding: 5px;
    align-items: center;
    font-size: 0.5rem;
    p {
      margin: 0;
    }
  }
}
`;

export default CartStyles;
