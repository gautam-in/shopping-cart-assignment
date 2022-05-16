import ErrorBoundaryComponent  from '../ErrorBoundary';
import { customViewports } from "../../../../.storybook/preview"


export default {
  title: 'Sabka Bazar/Molecules/ErrorBoundary/Mobile',
  component: ErrorBoundaryComponent,
  parameters: {
    viewport: {
      defaultViewport: 'iphoneSmall',
    },
    chromatic: {
      viewports: customViewports.iphoneSmall.viewports,
    },
  },

};

const ErrorBoundaryStory = () => <ErrorBoundaryComponent />;

export const ErrorBoundary = ErrorBoundaryStory.bind({});

