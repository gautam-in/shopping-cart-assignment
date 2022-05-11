import './forminput.style.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input  className='form-input' {...otherProps} />
      {label && (
        <label for={otherProps.name}
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
