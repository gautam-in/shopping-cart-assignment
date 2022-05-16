import LowestPriceTagComponent  from '../LowestPriceTag';
import { customViewports } from "../../../../.storybook/preview"


export default {
  title: 'Sabka Bazar/Molecules/LowestPriceTag/Mobile',
  component: LowestPriceTagComponent,
  parameters: {
    viewport: {
      defaultViewport: 'iphoneSmall',
    },
    chromatic: {
      viewports: customViewports.iphoneSmall.viewports,
    },
  },
};

const LowestPriceTagStory = (args) => <LowestPriceTagComponent {...args}/>;

export const LowestPriceTag = LowestPriceTagStory.bind({});

LowestPriceTag.args = {
    type:"email",
    name:"Email"
};
