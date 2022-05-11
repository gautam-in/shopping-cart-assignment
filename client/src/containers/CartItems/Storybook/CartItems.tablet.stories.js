import CartItemsComponent  from '../CartItems';
import { customViewports } from "../../../../.storybook/preview"
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Molecules/CartItems/Tablet',
  component: CartItemsComponent,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    chromatic: {
      viewports: customViewports.ipadLarge.viewports,
    },
  },

};

const CartItemsStory = (args) => <CartItemsComponent {...args}/>;

export const CartItems = CartItemsStory.bind({});
CartItems.args = {
    data
};
