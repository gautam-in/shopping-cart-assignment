import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Formik, Form } from "formik";
import "./index.scss";
import {
  validateConfirmPassword,
  validateEmail,
  validateRequired,
  validatePassword,
} from "../../helpers/Validation";

export const Register = () => {
  const navigate = useNavigate();

  const validateForm = (values) => {
    let errors = {};

    errors = validateRequired(values);
    let emailError = values.email && validateEmail(values.email);

    if (emailError) {
      errors.email = emailError;
    }

    let pwdError = values.password && validatePassword(values.password);

    if (pwdError) {
      errors.password = pwdError;
    }

    let confirmPwdError =
      values.confirmPassword &&
      validateConfirmPassword(values.password, values.confirmPassword);

    if (confirmPwdError) {
      errors.confirmPassword = confirmPwdError;
    }

    return errors;
  };

  const onSubmit = () => {
    navigate(`/`);
  };

  return (
    <Container className="register">
      <Row className="my-5">
        <Col className="my-3">
          <h3>Signup</h3>
          <p>We do not share your personal details with anyone</p>
        </Col>
        <Col>
          <Formik
            initialValues={{
              fName: "",
              lName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validate={validateForm}
            onSubmit={onSubmit}
          >
            {({ errors }) => (
              <Form>
                <Input
                  type="text"
                  name="fName"
                  label="First Name"
                  errors={errors}
                />
                <Input
                  type="text"
                  name="lName"
                  label="Last Name"
                  errors={errors}
                />
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  errors={errors}
                />
                <Input
                  type="text"
                  name="password"
                  label="Password"
                  errors={errors}
                />
                <Input
                  type="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  errors={errors}
                />

                <Button className="btn-primary" type="submit">
                  Signup
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};
