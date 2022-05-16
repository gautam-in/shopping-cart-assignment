import VerticalNavComponent  from '../VerticalNav';
import { customViewports } from "../../../../.storybook/preview"
import { data } from "../Data";

export default {
  title: 'Sabka Bazar/Molecules/VerticalNav/Mobile',
  component: VerticalNavComponent,
  parameters: {
    viewport: {
      defaultViewport: 'iphoneSmall',
    },
    chromatic: {
      viewports: customViewports.iphoneSmall.viewports,
    },
  },
};

const VerticalNavStory = (args) => <VerticalNavComponent {...args}/>;

export const VerticalNav = VerticalNavStory.bind({});

VerticalNav.args = {
    data
};
