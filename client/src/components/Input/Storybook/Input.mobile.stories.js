import InputComponent  from '../Input';
import { customViewports } from "../../../../.storybook/preview"

export default {
  title: 'Sabka Bazar/Atoms/Input/Mobile',
  component: InputComponent,
  parameters: {
    viewport: {
      defaultViewport: 'iphoneSmall',
    },
    chromatic: {
      viewports: customViewports.iphoneSmall.viewports,
    },
  },
};

const InputLg = (args) => <InputComponent {...args}/>;

export const Input = InputLg.bind({});

Input.args = {
    type:"email",
    name:"Email"
};
