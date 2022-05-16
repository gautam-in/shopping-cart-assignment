import InputComponent  from '../Input';

export default {
  title: 'Sabka Bazar/Atoms/Input/Desktop',
  component: InputComponent,
};

const InputLg = (args) => <InputComponent {...args}/>;

export const Input = InputLg.bind({});

Input.args = {
    type:"email",
    name:"Email"
};
