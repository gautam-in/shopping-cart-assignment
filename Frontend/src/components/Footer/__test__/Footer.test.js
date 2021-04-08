import '@testing-library/jest-dom';
import {render, cleanup, screen} from '@testing-library/react';
import Footer from '../Footer';

afterEach(() => {
  cleanup();
});

it('renders', () => {
  render(<Footer />);
  const footer = screen.getByTestId('footer-wrap');
  expect(footer).toBeInTheDocument();
});
