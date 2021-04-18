import PropTypes from 'prop-types';
import './Skeleton.scss';

const SkeletonElement = ({type}) => {
  const classes = `skeleton ${type}`;
  return <div className={classes} />;
};

SkeletonElement.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SkeletonElement;
