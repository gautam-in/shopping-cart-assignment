import '../../index';
import Loadform from '../../components/Form/Form';

const LoginForm = {
  title: 'Login',
  description: 'Get access to your Orders, Wishlist and Recommendations',
  button: 'Login',
  formFields: [
    {
      label: 'Email',
      type: 'email',
      isRequired: true,
    },
    {
      label: 'Password',
      type: 'password',
      isRequired: true,
    },
  ],
};

window.addEventListener('DOMContentLoaded', () => Loadform(LoginForm));
