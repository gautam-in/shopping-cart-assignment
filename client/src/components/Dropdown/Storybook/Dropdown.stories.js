import DropdownComponent  from '../Dropdown';
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Atoms/Dropdown',
  component: DropdownComponent,
};

const PrimaryStory = (args) => <DropdownComponent {...args}/>;

export const Dropdown = PrimaryStory.bind({});
Dropdown.args = {
    data
};
