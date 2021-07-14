import React from "react";

const RegisterForm = React.lazy(() =>
  import(
    /* webpackChunkName: "RegisterPageRegisterFormComponent" */ "../../components/RegisterForm"
  )
);

const RegisterPage = () => {
  return (
    <>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
