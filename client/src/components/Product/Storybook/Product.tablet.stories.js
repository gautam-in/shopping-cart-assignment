import ProductComponent  from '../Product';
import { customViewports } from "../../../../.storybook/preview"
import { data } from "../Data";

export default {
  title: 'Sabka Bazar/Molecules/Product/Tablet',
  component: ProductComponent,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    chromatic: {
      viewports: customViewports.ipadLarge.viewports,
    },
  },

};

const ProductStory = (args) => <ProductComponent {...args}/>;

export const Product = ProductStory.bind({});

Product.args = {
    data
};
