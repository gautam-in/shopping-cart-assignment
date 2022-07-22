import {useForm, FormProvider} from "react-hook-form";
import MuiButton from '../common/muiButton';
import useYupValidationResolver from '../../hooks/useYupValidationResolver';
import {signupValidationSchema} from "../../utils/validations";
import FormInput from "../common/formInput";
import "./styles.scss";


const SignupForm = () => {
  const resolver = useYupValidationResolver(signupValidationSchema);
  const methods = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
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
    window.location.href = "/";
  };




  return (
    <FormProvider {...methods}>
      <form className="signinform-container" onSubmit={handleSubmit(onSubmit)}>

        <FormInput
          name="firstName"
          label="First Name"
          errorobj={errors}
          setError={setError}
          register={register}
          variant="standard"
          type="text"
        />

        <FormInput
          name="lastName"
          label="Last Name"
          errorobj={errors}
          setError={setError}
          register={register}
          variant="standard"
          type="text"
        />



        <FormInput
          name="email"
          label="Email"
          errorobj={errors}
          setError={setError}
          register={register}
          variant="standard"
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


        <FormInput
          name="confirmPassword"
          label="Confirm Password"
          errorobj={errors}
          setError={setError}
          register={register}
          variant="standard"
          type="password"
        />


        <MuiButton fullWidth variant="contained" type="submit">
          Signup
        </MuiButton>
      </form>
    </FormProvider>
  );
};

export default SignupForm;