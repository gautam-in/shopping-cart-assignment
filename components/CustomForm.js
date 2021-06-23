import { Field, formValues, reduxForm, submit } from "redux-form";
import CustomFormStyle from "./styles/customFormStyle";
import CustomButton from "./CustomButton";
import ButtonStyles from "./styles/ButtonStyles";
import {validateFunc} from '../lib/formValidation'

function CustomForm(props) {
console.log(props)
  const onSubmit = (formValues) => {
    console.log(formValues)
    props.onSubmit(formValues)
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
    <CustomFormStyle onSubmit={props.handleSubmit(onSubmit)}>
      {renderForm(props?.formArray)}
      <ButtonStyles type="submit" disabled={props.pristine || props.submitting} className="reduxFormBtn" >{props.btnLabel}</ButtonStyles>
    </CustomFormStyle>
  );
}
const renderError = ({error, touched}) => {
    if (error && touched) {
      return <div>{error}</div>
    }
  };
const renderInput = ({ input, label, meta, required,type }) => {
  return (
    <div
      className={`input-container ${meta.error && meta.touched ? "error" : ""}`}
    >
      <input {...input} className="input-field" required={required} type={type} />
      <label htmlFor={input.formName}>{label}</label> 
      {renderError(meta)}
    </div>
  );
};

const validate = (value) => validateFunc(value)


export default reduxForm({
  form: "userForm",
  validate
})(CustomForm);
