import CategoryComponent  from '../Category';
import { customViewports } from "../../../../.storybook/preview"
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Molecules/Category/Mobile',
  component: CategoryComponent,
  parameters: {
    viewport: {
      defaultViewport: 'iphoneSmall',
    },
    chromatic: {
      viewports: customViewports.iphoneSmall.viewports,
    },
  },

};

const CategoryStory = (args) => <CategoryComponent {...args}/>;

export const Category = CategoryStory.bind({});
Category.args = {
    data
};
