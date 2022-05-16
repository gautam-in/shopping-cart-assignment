import InputComponent  from '../Input';
import { customViewports } from "../../../../.storybook/preview"


export default {
  title: 'Sabka Bazar/Atoms/Input/Tablet',
  component: InputComponent,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    chromatic: {
      viewports: customViewports.ipadLarge.viewports,
    },
  },
};

const InputLg = (args) => <InputComponent {...args}/>;

export const Input = InputLg.bind({});

Input.args = {
    type:"email",
    name:"Email"
};
