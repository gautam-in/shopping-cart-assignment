import React from 'react';
import { screen, render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { store } from '../redux/store';
import ProductCard from '../components/Products/ProductCard';
import ProductCardData from './testutils/ProductCardData.json';

describe('Product Card tests', () => {
	beforeEach(() => {
		render(
			<ChakraProvider>
				<Provider store={store}>
					<ProductCard
						id={ProductCardData.id}
						name={ProductCardData.name}
						price={ProductCardData.price}
						description={ProductCardData.description}
						imageURL={ProductCardData.imageURL}
					/>
				</Provider>
			</ChakraProvider>
		);
	});

	test('Product card should render correctly', () => {
		const productCardElement = screen.getByText(/Fresho Kiwi/i);
		expect(productCardElement).toBeInTheDocument();
	});

	test('On Cliking add to cart should execute addToCartHandler function', () => {
		const mockAddToHandlerFunction = jest.fn();
		const addtoCartButton = screen.getByText('Add To Cart');
		addtoCartButton.onclick = mockAddToHandlerFunction;
		userEvent.click(addtoCartButton);
		expect(mockAddToHandlerFunction).toHaveBeenCalledTimes(1);
	});

	test('On Cliking add to cart mulitple times should execute addToCartHandler function respective number of times', () => {
		const mockAddToHandlerFunction = jest.fn();
		const addtoCartButton = screen.getByText('Add To Cart');
		addtoCartButton.onclick = mockAddToHandlerFunction;
		for (let x = 0; x < 5; x++) {
			userEvent.click(addtoCartButton);
		}
		expect(mockAddToHandlerFunction).toHaveBeenCalledTimes(5);
	});
});
