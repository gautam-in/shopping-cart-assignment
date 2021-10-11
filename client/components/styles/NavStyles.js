import styled from 'styled-components';

const NavStyles = styled.div`
  display: flex;
  flex-direction: column;

   .right {
     align-self: self-end;
    }

    .space-btw {
      justify-content: space-between;
    }

  div {
    display: flex;
    flex-direction: row;
    gap: 10px;

   

    
    a,button {
      color: white;
      border-color:var(--secondary);
      background-color: var(--primary);
      border-width: 2px;
      border-style: solid;
      border-radius: 10px;
      margin: 5px;
      padding-left: 5px;
    }
    a:hover {
      border-bottom-color: var(--secondary);
      text-decoration: none;
}
  }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid var(--lightGrey);
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavStyles;