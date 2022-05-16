import ProductComponent  from '../Product';
import { data } from "../Data";

export default {
  title: 'Sabka Bazar/Molecules/Product/Desktop',
  component: ProductComponent,
};

const ProductStory = (args) => <ProductComponent {...args}/>;

export const Product = ProductStory.bind({});

Product.args = {
    data
};
