import LeftSignUpCardStyle from './leftSignupCard.styles';
import PropTypes from 'prop-types'
export default function LeftSignUpCard({ header, description }) {
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
