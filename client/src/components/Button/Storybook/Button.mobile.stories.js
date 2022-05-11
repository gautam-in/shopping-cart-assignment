import Button  from '../Button';
import { customViewports } from "../../../../.storybook/preview"

export default {
  title: 'Sabka Bazar/Atoms/Button/Mobile',
  component: Button,
  parameters: {
    viewport: {
      defaultViewport: 'iphoneSmall',
    },
    chromatic: {
      viewports: customViewports.iphoneSmall.viewports,
    },
  },
};

const PrimaryLg = (args) => <Button {...args}>Primary Button</Button>;

export const Primary = PrimaryLg.bind({});
Primary.args = {
  variant: 'primary',
  size: 'lg',
  disabled: false,
};
