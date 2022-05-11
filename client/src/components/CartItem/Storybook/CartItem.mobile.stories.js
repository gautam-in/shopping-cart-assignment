import CartItemComponent  from '../CartItem';
import { customViewports } from "../../../../.storybook/preview"
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Molecules/CartItem/Mobile',
  component: CartItemComponent,
  parameters: {
    viewport: {
      defaultViewport: 'iphoneSmall',
    },
    chromatic: {
      viewports: customViewports.iphoneSmall.viewports,
    },
  },
};

const CartItemStory = (args) => <CartItemComponent {...args}/>;

export const CartItem = CartItemStory.bind({});
CartItem.args = {
    data
};
