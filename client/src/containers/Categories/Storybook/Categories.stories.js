import CategoriesComponent  from '../Categories';
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Organisms/Categories',
  component: CategoriesComponent,
};

const CategoriesStory = (args) => <CategoriesComponent {...args}/>;

export const Categories = CategoriesStory.bind({});
Categories.args = {
    data
};
