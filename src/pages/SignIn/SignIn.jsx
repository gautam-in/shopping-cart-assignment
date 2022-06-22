import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "../SignIn/SignIn.scss";

const SignIn = () => {
  const initialFromFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(initialFromFields);
  const { email, password } = formFields;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };
  console.log(formFields);

  return (
    <div className="signin-container">
      <div className="signin-heading">
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <form action="" className="signin-form">
        <Input
          type="email"
          name="email"
          value={email}
          label="Email"
          required
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          value={password}
          label="Password"
          required
          onChange={handleInputChange}
        />
        <Button type="sign">Login</Button>
      </form>
    </div>
  );
};

export default SignIn;
