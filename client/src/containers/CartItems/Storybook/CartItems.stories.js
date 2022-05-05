import CartItemsComponent  from '../CartItems';
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Molecules/CartItems',
  component: CartItemsComponent,
};

const CartItemsStory = (args) => <CartItemsComponent {...args}/>;

export const CartItems = CartItemsStory.bind({});
CartItems.args = {
    data
};
