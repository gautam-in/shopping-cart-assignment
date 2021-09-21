import CustomInput from 'components/customHtmlTags/input';
import CustomButton from 'components/customHtmlTags/button';
import { useForm } from 'utils/customHooks';

const Signup = () => {
  const { inputs, handleChange } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <CustomInput
          id="firstName"
          type="text"
          name="firstName"
          label="First Name"
          required={true}
          onChange={handleChange}
          value={inputs.firstName}
        />
        <CustomInput
          id="lastName"
          type="text"
          name="lastName"
          label="Last Name"
          required={true}
          onChange={handleChange}
          value={inputs.lastName}
        />
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
        <CustomInput
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          required={true}
          onChange={handleChange}
          value={inputs.confirmPassword}
        />
        <CustomButton
          name="Signup"
          type="submit"
          bgColor="var(--primaryPink)"
        />
      </form>
    </section>
  );
};

export default Signup;
