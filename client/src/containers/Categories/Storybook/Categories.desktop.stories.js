import CategoriesComponent  from '../Categories';
import { customViewports } from "../../../../.storybook/preview";
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Organisms/Categories/Tablet',
  component: CategoriesComponent,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    chromatic: {
      viewports: customViewports.ipadLarge.viewports,
    },
  },

};

const CategoriesStory = (args) => <CategoriesComponent {...args}/>;

export const Categories = CategoriesStory.bind({});
Categories.args = {
    data
};
