import PropTypes from "prop-types";

import { Input, Button } from "../../components";
import { FORM_TYPES, ERROR_TYPES } from "../../constants";
import contentString from "../../contentStrings/en.json";
import "./form.scss";

const Form = ({ formType, error, formFields, onSubmithandler }) => {
  const {
    form,
    form: { errors, copyRight },
  } = contentString;

  const { heading, description, buttonText, fields } = form[formType];

  const errorContainer = error.showError ? (
    <div className="error-message">
      <p>{errors[error.errorType]}</p>
    </div>
  ) : null;

  const fieldsList = formFields.map((field) => (
    <Input key={field.name} {...field} />
  ));

  return (
    <div>
      <div className="form">
        <div className="form-details">
          <div className="description">
            <h2>{heading}</h2>
            <p>{description}</p>
          </div>
          <div>
            <form>
              {errorContainer}
              {fieldsList}
              <Button type="submit" onClickHandler={onSubmithandler}>
                {buttonText}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>{copyRight}</p>
      </div>
    </div>
  );
};

Form.propTypes = {
  formType: PropTypes.oneOf(Object.values(FORM_TYPES)),
  error: PropTypes.shape({
    showError: PropTypes.bool,
    errorType: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  }),
  formFields: PropTypes.array.isRequired,
  onSubmithandler: PropTypes.func.isRequired,
};

export default Form;
