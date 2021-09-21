import CustomInput from 'components/customHtmlTags/input';
import CustomButton from 'components/customHtmlTags/button';
import { useForm } from 'utils/customHooks';

const Login = () => {
  const { inputs, handleChange } = useForm({
    email: '',
    password: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput
        id="email"
        type="email"
        name="email"
        label="Email"
        required={true}
        onChange={handleChange}
        value={inputs.email}
      />
      <CustomInput
        id="password"
        type="password"
        name="password"
        label="Password"
        required={true}
        onChange={handleChange}
        value={inputs.password}
      />
      <CustomButton name="Login" type="submit" bgColor="var(--primaryPink)" />
    </form>
  );
};

export default Login;
