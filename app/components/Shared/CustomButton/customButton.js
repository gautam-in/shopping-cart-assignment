import ButtonStyles from './customButton.styles';
import PropTypes from 'prop-types'
import withErrorHandler from '../../../ErrorBoundary/withErrorHandler';
const CustomButton = ({
  text,
  classes,
  clickHandler,
  additionalText,
})=> {
  return (
    <ButtonStyles
      type="button"
      className={classes ? classes : ''}
      onClick={clickHandler}
      additionalText={additionalText}
    >
      {text}
    </ButtonStyles>
  );
}
CustomButton.propTypes = {
  text: PropTypes.any,
  classes: PropTypes.string,
  additionalText:PropTypes.string,
  clickHandler:PropTypes.any,
}

export default withErrorHandler(CustomButton)

