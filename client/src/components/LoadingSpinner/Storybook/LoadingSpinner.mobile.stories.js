import SpinnerComponent  from '../LoadingSpinner';
import { customViewports } from "../../../../.storybook/preview"


export default {
  title: 'Sabka Bazar/Molecules/Spinner/Mobile',
  component: SpinnerComponent,
  parameters: {
    viewport: {
      defaultViewport: 'iphoneSmall',
    },
    chromatic: {
      viewports: customViewports.iphoneSmall.viewports,
    },
  },
};

const SpinnerStory = () => <SpinnerComponent />;

export const Spinner = SpinnerStory.bind({});

