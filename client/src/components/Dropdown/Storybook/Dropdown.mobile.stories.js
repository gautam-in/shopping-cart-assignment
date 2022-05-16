import DropdownComponent  from '../Dropdown';
import { customViewports } from "../../../../.storybook/preview"
import { data } from '../Data';

export default {
  title: 'Sabka Bazar/Atoms/Dropdown/Mobile',
  component: DropdownComponent,
  parameters: {
    viewport: {
      defaultViewport: 'iphoneSmall',
    },
    chromatic: {
      viewports: customViewports.iphoneSmall.viewports,
    },
  },
};

const PrimaryStory = (args) => <DropdownComponent {...args}/>;

export const Dropdown = PrimaryStory.bind({});
Dropdown.args = {
    data
};
