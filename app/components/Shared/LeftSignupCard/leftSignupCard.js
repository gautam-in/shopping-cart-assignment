import LeftSignUpCardStyle from './leftSignupCard.styles';
import PropTypes from 'prop-types'
import withErrorHandler from '../../../ErrorBoundary/withErrorHandler';
const LeftSignUpCard = ({ header, description }) => {
  return (
    <LeftSignUpCardStyle>
      <h1>{header}</h1>
      <p>{description}</p>
    </LeftSignUpCardStyle>
  );
}
LeftSignUpCard.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string
}
export default withErrorHandler(LeftSignUpCard)
