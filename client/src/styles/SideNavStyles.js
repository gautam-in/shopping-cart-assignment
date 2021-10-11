import styled from "styled-components";

const SideNavStyles = styled.main`
  display: flex;
  margin-top: 70px;
  min-width: 225px;
  padding: 1rem;
  background-color: var(--grey);
  flex-direction: column;
  a {
    color: var(--black);
    border-bottom: 1px solid var(--black);
    padding: 0.5rem;
    font-weight: bold;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    min-width: 160px;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const Dropdown = styled.section`
display:none;
@media (max-width: 480px) {
  display:block;
  select{
    appearance: none;
    background-color: var(--button-color);
    color: var(--white);
    opacity: 1;
    padding: 1rem 6rem;
    border: none;
    letter-spacing: .15px;
    margin:1rem;
   }
  }
}
`;

export { SideNavStyles, Dropdown };
