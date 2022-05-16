import CartItemsComponent  from '../CartItems';
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Molecules/CartItems/Desktop',
  component: CartItemsComponent,
};

const CartItemsStory = (args) => <CartItemsComponent {...args}/>;

export const CartItems = CartItemsStory.bind({});
CartItems.args = {
    data
};
