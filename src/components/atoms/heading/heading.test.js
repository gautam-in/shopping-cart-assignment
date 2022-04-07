
import React from 'react';
import { render, screen } from '@testing-library/react';

import Heading from './index';

describe('App', () => {
    test('renders App component', () => {
        render(<Heading heading={"Testing"}/>);
        expect(screen.getByText('Testing')).toBeInTheDocument();
    });
});