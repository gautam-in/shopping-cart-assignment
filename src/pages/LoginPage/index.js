import React from "react";

const LoginForm = React.lazy(() => import(/* webpackChunkName: "LoginPageLoginFormComponent" */ "../../components/LoginForm"));

const LoginPage = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default LoginPage;
