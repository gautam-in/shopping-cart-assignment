/* eslint-disable react-hooks/rules-of-hooks */
import {useRef} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {Form, Label, Input} from 'reactstrap';
import ErrorMessage from '../../../components/ErrorMessage';
import {
  emailValidation,
  nameValidation,
  passwordValidation,
} from '../../../constant';
import '../../../styles/Form.scss';

const signUpForm = ({history}) => {
  const {register, handleSubmit, errors, reset, watch, formState} = useForm({
    mode: 'onChange',
  });
  const firstname = watch('firstname');
  const lastname = watch('lastname');
  const email = watch('email');
  const password = useRef({});
  password.current = watch('password', '');
  const confirmPassword = watch('confirm_password');
  const onSubmit = (data) => {
    console.log(data);
    history.push('/login');
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
            <div className="floating-group">
              <Input
                type="text"
                name="firstname"
                id="firstname"
                autoComplete="off"
                placeholder="First Name"
                autoFocus
                innerRef={register(nameValidation)}
                aria-required="true"
                aria-label="Enter first name"
                aria-invalid={errors.firstname ? 'true' : 'false'}
                className={errors.firstname ? 'input-error' : undefined}
              />
              <Label
                for="firstname"
                className={
                  firstname ? 'floating-label-has-text' : 'floating-label'
                }
              >
                First Name
              </Label>
              {errors.firstname && (
                <span
                  className="required-label"
                  role="alert"
                  aria-atomic="true"
                >
                  <ErrorMessage
                    type={errors.firstname.type}
                    minLength={nameValidation.minLength}
                    maxLength={nameValidation.maxLength}
                    field="first name"
                  />
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
            <div className="floating-group">
              <Input
                type="text"
                name="lastname"
                id="lastname"
                autoComplete="off"
                placeholder="Last Name"
                innerRef={register(nameValidation)}
                aria-label="Enter last name"
                aria-invalid={errors.lastname ? 'true' : 'false'}
                aria-describedby={errors.lastname && errors.lastname.type}
                className={errors.lastname ? 'input-error' : undefined}
              />
              <Label
                for="lastname"
                className={
                  lastname ? 'floating-label-has-text' : 'floating-label'
                }
              >
                Last Name
              </Label>
              {errors.lastname && (
                <span
                  className="required-label"
                  role="alert"
                  aria-atomic="true"
                >
                  <ErrorMessage
                    type={errors.lastname.type}
                    minLength={nameValidation.minLength}
                    maxLength={nameValidation.maxLength}
                    field="lastname"
                  />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
          <div className="floating-group">
            <Input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Email"
              innerRef={register(emailValidation)}
              aria-required="true"
              aria-label="Enter email id"
              aria-invalid={errors.email ? 'true' : 'false'}
              className={errors.email ? 'input-error' : undefined}
            />
            <Label
              for="email"
              className={email ? 'floating-label-has-text' : 'floating-label'}
            >
              Email
            </Label>
            {errors.email && (
              <span className="required-label" role="alert" aria-atomic="true">
                <ErrorMessage
                  type={errors.email.type}
                  minLength={emailValidation.minLength}
                  maxLength={emailValidation.maxLength}
                  field="email-id"
                />
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
          <div className="floating-group">
            <Input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              placeholder="Password"
              innerRef={register(passwordValidation)}
              aria-required="true"
              aria-label="Enter password"
              aria-invalid={errors.password ? 'true' : 'false'}
              className={errors.password ? 'input-error' : undefined}
            />
            <Label
              for="password"
              className={
                password.current ? 'floating-label-has-text' : 'floating-label'
              }
            >
              Password
            </Label>

            {errors.password && (
              <span className="required-label" role="alert" aria-atomic="true">
                <ErrorMessage
                  type={errors.password.type}
                  minLength={passwordValidation.minLength}
                  maxLength={passwordValidation.maxLength}
                  field="password"
                />
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
          <div className="floating-group">
            <Input
              type="password"
              name="confirm_password"
              id="confirm_password"
              autoComplete="off"
              placeholder="Confirm Password"
              innerRef={register({
                ...passwordValidation,
                validate: (value) =>
                  value === password.current || 'The passwords do not match',
              })}
              aria-required="true"
              aria-label="Enter confirm password"
              aria-invalid={errors.confirm_password ? 'true' : 'false'}
              className={errors.confirm_password ? 'input-error' : undefined}
            />
            <Label
              for="confirm_password"
              className={
                confirmPassword ? 'floating-label-has-text' : 'floating-label'
              }
            >
              Confirm Password
            </Label>
            {errors.confirm_password &&
              (errors.confirm_password.message || (
                <span
                  className="required-label"
                  role="alert"
                  aria-atomic="true"
                >
                  <ErrorMessage
                    type={errors.confirm_password.type}
                    minLength={passwordValidation.minLength}
                    maxLength={passwordValidation.maxLength}
                    field="confirm_password"
                  />
                </span>
              ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
          <div className="floating-group">
            <button
              type="submit"
              className="form-submit-btn"
              disabled={!formState.isValid}
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
};

signUpForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(signUpForm);
