import ProductsComponent  from '../Products';
import { customViewports } from "../../../../.storybook/preview";
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Organisms/Products/Tablet',
  component: ProductsComponent,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    chromatic: {
      viewports: customViewports.ipadLarge.viewports,
    },
  },

};

const ProductsStory = (args) => <ProductsComponent {...args}/>;

export const Products = ProductsStory.bind({});
Products.args = {
    data
};
