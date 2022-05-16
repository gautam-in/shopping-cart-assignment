import ProductsComponent  from '../Products';
import { customViewports } from "../../../../.storybook/preview";
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Organisms/Products/Mobile',
  component: ProductsComponent,
  parameters: {
    viewport: {
      defaultViewport: 'iphoneSmall',
    },
    chromatic: {
      viewports: customViewports.iphoneSmall.viewports,
    },
  },

};

const ProductsStory = (args) => <ProductsComponent {...args}/>;

export const Products = ProductsStory.bind({});
Products.args = {
    data
};
