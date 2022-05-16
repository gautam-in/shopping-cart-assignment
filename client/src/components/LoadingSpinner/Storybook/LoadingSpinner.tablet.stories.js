import SpinnerComponent  from '../LoadingSpinner';
import { customViewports } from "../../../../.storybook/preview"


export default {
  title: 'Sabka Bazar/Molecules/Spinner/Tablet',
  component: SpinnerComponent,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    chromatic: {
      viewports: customViewports.ipadLarge.viewports,
    },
  },

};

const SpinnerStory = () => <SpinnerComponent />;

export const Spinner = SpinnerStory.bind({});

