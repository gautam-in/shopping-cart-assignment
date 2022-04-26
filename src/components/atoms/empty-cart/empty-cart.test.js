
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import EmptyCart from './index';

describe('App', () => {
    test('renders App component', () => {
        let component = render(<BrowserRouter><EmptyCart /></BrowserRouter>);
        expect(component).toMatchSnapshot();
        expect(screen.getByText('Start Shopping')).toBeInTheDocument();
        expect(screen.queryByText('Start Shopping22')).toBeNull();
        screen.getByRole('link');
    });
});