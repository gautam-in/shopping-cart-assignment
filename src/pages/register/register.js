import '../../index.js';
import Loadform from '../../components/Form/Form.js';

const RegistartionForm = {
  title: 'SignUp',
  description: 'We do not share your personal details with anyone.',
  button: 'SignUp',
  formFields: [
    {
      label: 'First Name',
      type: 'text',
      isRequired: true,
    },
    {
      label: 'Last Name',
      type: 'text',
      isRequired: true,
    },
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
    {
      label: 'Confirm Password',
      type: 'password',
      isRequired: true,
    },
  ],
};

window.addEventListener('DOMContentLoaded', Loadform(RegistartionForm));
