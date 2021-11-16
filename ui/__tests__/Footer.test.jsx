import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/Footer';

describe('Footer component Test Unit Tests', () => {
	beforeEach(() => {
		render(
			<ChakraProvider>
				<Footer />
			</ChakraProvider>
		);
	});

	test('Footer Component should render on screen', () => {
		const footerSpanElement = screen.getByText(/Copyright 2011-2021/i);
		expect(footerSpanElement).toBeInTheDocument();
	});
});
