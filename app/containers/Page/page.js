
import Footer from '../../components/Footer';
import InnerStyle from './innerStyle';
import PropTypes from 'prop-types';
import Header from '../Header';

export default function Page({ children }) {
  return (
    <>
      <Header />
      <InnerStyle>{children}</InnerStyle>
      <Footer />
    </>
  );
}
Page.propTypes = {
  children: PropTypes.object
}
