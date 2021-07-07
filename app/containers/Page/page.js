import Footer from '../../components/Footer';
import InnerStyle from './innerStyle';
import PropTypes from 'prop-types';
import Header from '../Header';
import { ThemeProvider } from 'styled-components';
import theme from '../../../utils/themeConstant';

 const Page = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <InnerStyle>{children}</InnerStyle>
        <Footer />
      </ThemeProvider>
    </>
  );
}
Page.propTypes = {
  children: PropTypes.object,
};
export default Page