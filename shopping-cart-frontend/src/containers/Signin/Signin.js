import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Formik, Form } from "formik";
import "./SignIn.scss";
import {
  validateEmail,
  validateRequired,
  validatePassword,
} from "../../helpers/Validation";

export const SignIn = () => {
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

    return errors;
  };

  const onSubmit = () => {
    navigate(`/`);
  };

  return (
    <Container className="sign-in">
      <Row className="my-5">
        <Col className="my-3">
          <h3>Login</h3>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </Col>
        <Col>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={validateForm}
            onSubmit={onSubmit}
          >
            {({ errors }) => (
              <Form>
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

                <Button className="btn-primary" type="submit">
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};
