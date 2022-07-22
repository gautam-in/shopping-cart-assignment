import {useForm,  FormProvider} from "react-hook-form";
import MuiButton from '../common/muiButton';
import useYupValidationResolver from '../../hooks/useYupValidationResolver';
import {signinValidationSchema} from "../../utils/validations";
import FormInput from "../common/formInput";
import "./styles.scss";
import {Typography} from "@mui/material";


const SigninForm = () => {
  const resolver = useYupValidationResolver(signinValidationSchema);
  const methods = useForm({
    defaultValues: {
      email: '',
      password: ''
    }, resolver
  });


  const {
    handleSubmit,
    setError,
    register,
    formState: {errors},
  } = methods;

  const onSubmit = data => {
    console.log(data);
    localStorage.setItem("user",  JSON.stringify(data))
    window.location.href = "/"
  }




  return (
    <FormProvider {...methods}>
      <form className="signinform-container" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="email"
          label="Email"
          errorobj={errors}
          setError={setError}
          register={register}
          variant="standard"
          type="text"
        />

        <FormInput
          name="password"
          label="Password"
          errorobj={errors}
          setError={setError}
          register={register}
          variant="standard"
          type="password"
        />
        <MuiButton fullWidth variant="contained" type="submit">
          Login
        </MuiButton>
        <Typography component="p" variant="body2">
          New Customer? <a href = "/register">
            Signup
          </a>
        </Typography>
      </form>
    </FormProvider>
  );
};

export default SigninForm;