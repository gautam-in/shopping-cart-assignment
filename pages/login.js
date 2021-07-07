import Signin from '../app/containers/Signin';
import useTitle from '../utils/useTitle';

const LoginPage = () => {
  return (
    <>
      {useTitle('login')}
      <Signin />
    </>
  );
};

export default LoginPage;
