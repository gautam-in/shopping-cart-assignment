import DropdownComponent  from '../Dropdown';
import { customViewports } from "../../../../.storybook/preview"
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Atoms/Dropdown/Tablet',
  component: DropdownComponent,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    chromatic: {
      viewports: customViewports.ipadLarge.viewports,
    },
  },
};

const PrimaryStory = (args) => <DropdownComponent {...args}/>;

export const Dropdown = PrimaryStory.bind({});
Dropdown.args = {
    data
};
