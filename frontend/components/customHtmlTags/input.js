import PropTypes from 'prop-types';

const CustomInput = (props) => {
  const { name, value, label } = props;

  return (
    <div className="input-container">
      <input {...props} />
      <label className={value && 'filled'} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

CustomInput.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default CustomInput;
