import styled from "styled-components";

const FooterComponent = styled.footer`
  width: 100%;
  background-color: #dedede;
  padding: 0.7rem;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterComponent>
      Copright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt. Ltd.
    </FooterComponent>
  );
}
