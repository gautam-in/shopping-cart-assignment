import CartItemComponent  from '../CartItem';
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Molecules/CartItem/Desktop',
  component: CartItemComponent,
};

const CartItemStory = (args) => <CartItemComponent {...args}/>;

export const CartItem = CartItemStory.bind({});
CartItem.args = {
    data
};
