import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MyApp from '../pages/_app';
import { afterEach, expect } from '@jest/globals';

afterEach(cleanup);

it('should take snapshot', () => {
    const { asFragment } = render(<MyApp />)
    expect(asFragment(<MyApp />)).toMatchSnapshot()
});