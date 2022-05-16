import ProductComponent  from '../Product';
import { customViewports } from "../../../../.storybook/preview"
import { data } from "../Data";

export default {
  title: 'Sabka Bazar/Molecules/Product/Mobile',
  component: ProductComponent,
  parameters: {
    viewport: {
      defaultViewport: 'iphoneSmall',
    },
    chromatic: {
      viewports: customViewports.iphoneSmall.viewports,
    },
  },

};

const ProductStory = (args) => <ProductComponent {...args}/>;

export const Product = ProductStory.bind({});

Product.args = {
    data
};
