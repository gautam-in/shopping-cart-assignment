import CategoryComponent  from '../Category';
import { customViewports } from "../../../../.storybook/preview"
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Molecules/Category/Tablet',
  component: CategoryComponent,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    chromatic: {
      viewports: customViewports.ipadLarge.viewports,
    },
  },
};

const CategoryStory = (args) => <CategoryComponent {...args}/>;

export const Category = CategoryStory.bind({});
Category.args = {
    data
};
