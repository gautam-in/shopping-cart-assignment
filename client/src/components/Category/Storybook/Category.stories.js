import CategoryComponent  from '../Category';
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Molecules/Category',
  component: CategoryComponent,
};

const CategoryStory = (args) => <CategoryComponent {...args}/>;

export const Category = CategoryStory.bind({});
Category.args = {
    data
};
