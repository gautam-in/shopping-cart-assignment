import ErrorBoundaryComponent  from '../ErrorBoundary';
import { customViewports } from "../../../../.storybook/preview"


export default {
  title: 'Sabka Bazar/Molecules/ErrorBoundary/Tablet',
  component: ErrorBoundaryComponent,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    chromatic: {
      viewports: customViewports.ipadLarge.viewports,
    },
  },

};

const ErrorBoundaryStory = () => <ErrorBoundaryComponent />;

export const ErrorBoundary = ErrorBoundaryStory.bind({});

