import Register from '../app/containers/Register';
import useTitle from '../utils/useTitle';

const RegisterPage = () => {
  return (
    <>
     {useTitle('register')}
      <Register />
    </>
  );
};

export default RegisterPage;
