import VerticalNavComponent  from '../VerticalNav';
import { customViewports } from "../../../../.storybook/preview"
import { data } from "../Data";

export default {
  title: 'Sabka Bazar/Molecules/VerticalNav/Tablet',
  component: VerticalNavComponent,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    chromatic: {
      viewports: customViewports.ipadLarge.viewports,
    },
  },
};

const VerticalNavStory = (args) => <VerticalNavComponent {...args}/>;

export const VerticalNav = VerticalNavStory.bind({});

VerticalNav.args = {
    data
};
