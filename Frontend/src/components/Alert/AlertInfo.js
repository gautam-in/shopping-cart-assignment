import {Alert} from 'reactstrap';
import PropTypes from 'prop-types';
import './AlertInfo.scss';

const AlertInfo = ({message, color}) => (
  <>
    <Alert color={color}>{message}</Alert>
  </>
);

AlertInfo.propTypes = {
  message: PropTypes.string,
  color: PropTypes.string,
};

AlertInfo.defaultProps = {
  message: 'something went wrong!',
  color: 'danger',
};

export default AlertInfo;
