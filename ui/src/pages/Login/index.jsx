import Header from "../../container/Header";
import { Input, Button } from "../../components";

import { INPUT_TYPES } from "../../constants";
import contentString from "../../contentStrings/en.json";
import "./login.scss";
import { useState } from "react";

const Login = () => {
  const { signIn } = contentString;
  /*
    Input format = {
      value: inputValue,
      isError: false,
      errorType: ERROR_TYPES.NONE
    } 
  */
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const onSubmit = (event) => {
    event.preventDefault();
    if (!email.isError && !password.isError) {
      // call api for login
    }
  };

  return (
    <div>
      <Header />
      <div className="login-form">
        <div className="login">
          <div className="description">
            <h2>{signIn.loginHeading}</h2>
            <p>{signIn.loginDescription}</p>
          </div>
          <div>
            <form>
              <Input
                type={INPUT_TYPES.EMAIL}
                labelName={signIn.email}
                required
                getValue={setEmail}
                placeHolder={signIn.email}
              />
              <Input
                type={INPUT_TYPES.PASSWORD}
                labelName={signIn.password}
                required
                getValue={setPassword}
                placeHolder={signIn.password}
              />
              <Button type="submit" onClickHandler={onSubmit}>
                {signIn.LoginButtonText}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>{signIn.copyRight}</p>
      </div>
    </div>
  );
};

export default Login;
