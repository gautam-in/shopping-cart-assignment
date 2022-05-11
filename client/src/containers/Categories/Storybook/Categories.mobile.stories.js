import CategoriesComponent  from '../Categories';
import { customViewports } from "../../../../.storybook/preview";
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Organisms/Categories/Mobile',
  component: CategoriesComponent,
  parameters: {
    viewport: {
      defaultViewport: 'iphoneSmall',
    },
    chromatic: {
      viewports: customViewports.iphoneSmall.viewports,
    },
  },

};

const CategoriesStory = (args) => <CategoriesComponent {...args}/>;

export const Categories = CategoriesStory.bind({});
Categories.args = {
    data
};
