import Styled from "styled-components";
import P from "../Typography/P";
import { TRANSLATIONS } from '../../constants';

const Footer = Styled.footer`
  background-color: #eaeaea;
  padding: 18px 0;
  margin-top: 60px ;
`;

const Content = Styled.div`
  text-align: center;
`;

const FooterComponent = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <Footer>
      <Content>
        <P>
          {" "}
          Copyright &copy; 2011 - {year} {TRANSLATIONS.FOOTER.DESC}{" "}
        </P>
      </Content>
    </Footer>
  );
};

export default FooterComponent;
