import PropTypes  from 'prop-types';
import CustomFormStyle from './customForm.styles';
import ButtonStyles from '../CustomButton/customButton.styles';
import { Field, reduxForm } from 'redux-form';
import { validateFunc } from '../../../../lib/formValidation';


const CustomForm = (props) => {
  const {onSubmit, formArray, pristine, submitting, btnLabel, handleSubmit} = props;
  const onFormSubmit = (formValues) => {
    onSubmit(formValues);
  };

  const renderForm = (formArray) => {
    return formArray.map(({ formName, label, type, id, required }) => {
      return (
        <Field
          type={type}
          name={formName}
          component={renderInput}
          label={label}
          key={id}
          required={required}
        />
      );
    });
  };

  return (
    <CustomFormStyle onSubmit={handleSubmit(onFormSubmit)}>
      {renderForm(formArray)}
      <ButtonStyles
        type="submit"
        disabled={pristine || submitting}
        className="reduxFormBtn"
      >
        {btnLabel}
      </ButtonStyles>
    </CustomFormStyle>
  );
}
const renderError = ({ error, touched }) => {
  if (error && touched) {
    return <div>{error}</div>;
  }
};
const renderInput = ({ input, label, meta, required, type }) => {
  return (
    <div
      className={`input-container ${meta.error && meta.touched ? 'error' : ''}`}
    >
      <input
        {...input}
        required={required}
        type={type}
      />
      <label htmlFor={input.formName}>{label}</label>
      {renderError(meta)}
    </div>
  );
};

const validate = (value) => validateFunc(value);
CustomForm.propTypes = {
  onSubmit: PropTypes.func, 
  formArray: PropTypes.array, 
  pristine: PropTypes.bool, 
  submitting: PropTypes.bool, 
  handleSubmit: PropTypes.func, 
  btnLabel: PropTypes.string
}
export default reduxForm({
  form: 'userForm',
  validate,
})(CustomForm);
