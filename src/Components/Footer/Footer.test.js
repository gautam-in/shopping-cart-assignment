import { render } from '@testing-library/react';
import Footer from './Footer';

test('Footer rendered successfully', () => {
    const { getAllByTestId } = render(<Footer />)
    const footer = getAllByTestId('footer');
    expect(footer).toBeTruthy();

});