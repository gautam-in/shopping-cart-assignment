import ErrorBoundaryComponent  from '../ErrorBoundary';

export default {
  title: 'Sabka Bazar/Molecules/ErrorBoundary',
  component: ErrorBoundaryComponent,
};

const ErrorBoundaryStory = () => <ErrorBoundaryComponent />;

export const ErrorBoundary = ErrorBoundaryStory.bind({});

