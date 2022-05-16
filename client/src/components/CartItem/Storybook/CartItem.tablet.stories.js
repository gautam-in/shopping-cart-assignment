import CartItemComponent  from '../CartItem';
import { customViewports } from "../../../../.storybook/preview"
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Molecules/CartItem',
  component: CartItemComponent,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    chromatic: {
      viewports: customViewports.ipadLarge.viewports,
    },
  },
};

const CartItemStory = (args) => <CartItemComponent {...args}/>;

export const CartItem = CartItemStory.bind({});
CartItem.args = {
    data
};
