import { useRouter } from "next/router";
import { SIGN_IN } from "../context/actions/Constant";
import SignUpHeader from "../Component/atom/SignUpHeader";
import SignUpStyle from "../component/styles/SignupStyle";
import CustomFormStyle from "../component/styles/FormStyle";
import InputBox from "../component/atom/Input";
import ButtonStyles from "../component/styles/ButtonStyles";
import { loginValidation } from "../Lib/Validation";
import { LoginDescription, LoginHeader } from "../constant/index";
import { LoginContext } from "../context/LoginContext";
import { useContext, useState } from "react";
import useForm from '../Lib/useForm';


const signIn = () => {
    const router = useRouter();
    const { logindispatch } = useContext(LoginContext);
    const [errors, setErrors] = useState({});
    const { inputs, handleChange, resetForm } = useForm({
        email: '',
        password: '',
      });

    async function handleSubmit(e) {
        e.preventDefault(); // stop the form from submitting
        console.log(inputs, loginValidation(inputs));
        loginValidation(inputs)
        setErrors(loginValidation(inputs))
        if(Object.keys(errors).length === 0) {
            logindispatch({ type: SIGN_IN, payload: inputs });
            resetForm();
            router.push("/");
        }
      }


    return (
        <SignUpStyle>
        <SignUpHeader header={LoginHeader} description={LoginDescription} />
        <CustomFormStyle method="post" onSubmit={handleSubmit}>
          <InputBox
            name="email"
            type="email"
            label="Email"
            onChange={handleChange}
            value={inputs.email}
            error={errors.email}
          />
          <InputBox
            name="password"
            type="password"
            label="Password"
            onChange={handleChange}
            value={inputs.password}
            error={errors.password}
          />
          <ButtonStyles type="submit" className="Btn">
            {LoginHeader}
          </ButtonStyles>
        </CustomFormStyle>
      </SignUpStyle>
     );
}
 
export default signIn;