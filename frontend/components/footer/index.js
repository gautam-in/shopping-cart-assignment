import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;

  background-color: rgb(234, 234, 234);

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd.{' '}
    </FooterWrapper>
  );
};

export default Footer;
