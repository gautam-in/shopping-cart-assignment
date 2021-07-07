import withErrorHandler from '../../ErrorBoundary/withErrorHandler';
import FooterStyle from './footer.styles';
const Footer = () => {
  return (
    <FooterStyle>
      <p>Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt. Ltd. </p>
    </FooterStyle>
  );
}
export default withErrorHandler(Footer)
