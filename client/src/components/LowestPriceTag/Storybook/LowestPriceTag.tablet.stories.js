import LowestPriceTagComponent  from '../LowestPriceTag';
import { customViewports } from "../../../../.storybook/preview"


export default {
  title: 'Sabka Bazar/Molecules/LowestPriceTag/Tablet',
  component: LowestPriceTagComponent,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    chromatic: {
      viewports: customViewports.ipadLarge.viewports,
    },
  },

};

const LowestPriceTagStory = (args) => <LowestPriceTagComponent {...args}/>;

export const LowestPriceTag = LowestPriceTagStory.bind({});

LowestPriceTag.args = {
    type:"email",
    name:"Email"
};
