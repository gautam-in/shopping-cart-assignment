import { useRouter } from "next/router";
import { SIGN_IN } from "../context/actions/Constant";
import SignUpHeader from "../Component/atom/SignUpHeader";
import SignUpStyle from "../component/styles/SignupStyle";
import CustomFormStyle from "../component/styles/FormStyle";
import InputBox from "../component/atom/Input";
import CustomButton from "../Component/atom/CustomButton";
import { RegisterValidation } from "../Lib/Validation";
import { SignupHeader, SignupDescription } from "../constant/index";
import { LoginContext } from "../context/LoginContext";
import { useContext, useState } from "react";
import useForm from '../Lib/useForm';

const register = () => {
    const router = useRouter();
    const { logindispatch } = useContext(LoginContext);
    const [errors, setErrors] = useState({});
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        confirmPassword: ''
      });
      async function handleSubmit(e) {
        e.preventDefault(); // stop the form from submitting
        console.log(inputs);
        RegisterValidation(inputs)
        console.log(RegisterValidation(inputs))
        setErrors(RegisterValidation(inputs))
        if(Object.keys(errors).length === 0) {
            logindispatch({ type: SIGN_IN, payload: inputs });
            resetForm();
            router.push("/");
        }
      }
  return (
    <SignUpStyle>
      <SignUpHeader header={SignupHeader} description={SignupDescription} />
      <CustomFormStyle method="post" onSubmit={handleSubmit}>
        <InputBox
          name="firstname"
          type="text"
          label="First Name"
          onChange={handleChange}
          value={inputs.firstname}
          error={errors.firstname}
          required
        />
        <InputBox
          name="lastname"
          type="text"
          label="Last Name"
          onChange={handleChange}
          value={inputs.lastname}
          error={errors.lastname}
          required
        />
        <InputBox
          name="email"
          type="email"
          label="Email"
          onChange={handleChange}
          value={inputs.email}
          required
          error={errors.email }
        />
        <InputBox
          name="password"
          type="password"
          label="Password"
          onChange={handleChange}
          value={inputs.password}
          required
          error={errors.password}
        />
        <InputBox
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          onChange={handleChange}
          value={inputs.confirmPassword}
          required
          error={errors.confirmPassword}
        />
        {/* <ButtonStyles type="Submit" className="Btn" onClick={handleSubmit}>
          {SignupHeader}
        </ButtonStyles> */}
        <CustomButton clickHandler={handleSubmit}>
        {SignupHeader}
        </CustomButton>
      </CustomFormStyle>
      {/* <form>
        <label htmlFor="FirstName">
          FirstName
          <input type="text" id="FirstName" name="FirstName" />
        </label>
        <label htmlFor="LastName">
          LastName
          <input type="text" id="LastName" name="LastName" />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" id="email" name="email" />
        </label>
        <label htmlFor="Password">
          Password
          <input type="Password" id="Password" name="Password" />
        </label>
        <label htmlFor="ConfirmPassword">
          Confirm Password
          <input type="Password" id="ConfirmPassword" name="ConfirmPassword" />
        </label>
        <button type="button">Register</button>
      </form> */}
    </SignUpStyle>
  );
};

export default register;
