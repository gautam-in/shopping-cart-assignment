import Button  from '../Button';

export default {
  title: 'Sabka Bazar/Atoms/Button',
  component: Button,
};

const PrimaryLg = (args) => <Button {...args}>Primary Button</Button>;

export const Primary = PrimaryLg.bind({});
Primary.args = {
  variant: 'primary',
  size: 'lg',
  disabled: false,
};
