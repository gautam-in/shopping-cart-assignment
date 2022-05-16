import ProductsComponent  from '../Products';
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Organisms/Products/Desktop',
  component: ProductsComponent,
};

const ProductsStory = (args) => <ProductsComponent {...args}/>;

export const Products = ProductsStory.bind({});
Products.args = {
    data
};
