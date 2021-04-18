import {cleanup, screen, within} from '@testing-library/react';
import 'regenerator-runtime/runtime';
import userEvent from '@testing-library/user-event';
import {render} from '../../../test-utils/wrapper';
import Products from '../Products';

afterEach(() => {
  cleanup();
});

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/products',
    search: '',
    hash: '',
    state: {id: null},
  }),
}));

test('render product cards intial condition', async () => {
  render(<Products />);
  expect(screen.getByTestId('product-categories')).toBeInTheDocument();
  expect(screen.getByTestId('products-list')).toBeInTheDocument();
});

test('check product filter ', async () => {
  render(<Products />);
  const productCategories = screen.getByTestId('product-filter-list');
  const products = screen.getByTestId('products-list');
  // event on product filter
  const productCategory = await (
    await within(productCategories).findByText(/beverage/i)
  ).closest('li');
  userEvent.click(productCategory);

  // display selected category product
  const productImage = await screen.findByRole('img', {
    name: /bev-tata-tea-500 cardimg/i,
  });
  expect(productImage).toBeInTheDocument();
  const priceText = await screen.findByText((content, element) => {
    return (
      element.tagName.toLowerCase() === 'span' &&
      content.startsWith('MRP RS.165')
    );
  });
  expect(priceText).toBeInTheDocument();
  const button = await within(products).findByRole('button', {
    name: /buy now/i,
  });
  expect(button).toBeEnabled();
  userEvent.click(button);
  expect(button).toBeDisabled();
  expect(button).toHaveTextContent(/in cart/i);
});
