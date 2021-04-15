/* eslint-disable react/jsx-boolean-value */
import {cleanup, screen, within} from '@testing-library/react';
import 'regenerator-runtime/runtime';
import {rest} from 'msw';
import {BrowserRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import server from '../../../mocks/server';
import {render} from '../../../test-utils/wrapper';
import ProductsList from '../ProductsList';
import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar/Sidebar';

afterEach(() => {
  cleanup();
});

test('handle error for product filter', async () => {
  server.resetHandlers(
    rest.get(`${process.env.Base_URL}/products`, (req, res, ctx) => {
      return res(ctx.status(500));
    }),
  );
  render(<ProductsList filterId={null} />);
  const error = await screen.findByText(/something went wrong!/i);
  expect(error).toBeInTheDocument();
});

test('render product cards intial condition', async () => {
  render(<ProductsList filterId={null} />);

  // check heading
  const heading = await screen.findAllByRole('heading');
  expect(heading).toHaveLength(4);
  const headingText = heading.map((element) => element.textContent);
  expect(headingText).toEqual([
    'Fresho Kiwi - Green, 3 pcs',
    'Apple - Washington, Regular, 4 pcs',
    'Tata Tea Gold Leaf Tea, 500 gm',
    'Organic Fresh Paneer, 200 gm ',
  ]);

  // check images
  const productImages = await screen.findAllByRole('img', {
    name: /cardimg$/i,
  });
  expect(productImages).toHaveLength(4);
  const altText = productImages.map((element) => element.alt);
  expect(altText).toEqual([
    'fnw-kiwi-3 cardimg',
    'fnw-apple-4 cardimg',
    'bev-tata-tea-500 cardimg',
    'bcd-paneer-200 cardimg',
  ]);

  // check description
  const paragaphTextOne = await screen.findByText((content, element) => {
    return (
      element.tagName.toLowerCase() === 'p' &&
      content.startsWith('Kiwis are oval shaped')
    );
  });

  const paragaphTextTwo = await screen.findByText((content, element) => {
    return (
      element.tagName.toLowerCase() === 'p' &&
      content.startsWith(
        'The bright red coloured and heart shaped Washington apples',
      )
    );
  });

  const paragaphTextThree = await screen.findByText((content, element) => {
    return (
      element.tagName.toLowerCase() === 'p' &&
      content.startsWith('Tata Tea Gold')
    );
  });

  const paragaphTextFour = await screen.findByText((content, element) => {
    return (
      element.tagName.toLowerCase() === 'p' &&
      content.startsWith('Freshly Baked bread')
    );
  });

  expect(paragaphTextOne).toBeInTheDocument();
  expect(paragaphTextTwo).toBeInTheDocument();
  expect(paragaphTextThree).toBeInTheDocument();
  expect(paragaphTextFour).toBeInTheDocument();

  // check price
  const priceTextOne = await screen.findByText((content, element) => {
    return (
      element.tagName.toLowerCase() === 'span' &&
      content.startsWith('MRP RS.87')
    );
  });

  const priceTextTwo = await screen.findByText((content, element) => {
    return (
      element.tagName.toLowerCase() === 'span' &&
      content.startsWith('MRP RS.187')
    );
  });

  const priceTextThree = await screen.findByText((content, element) => {
    return (
      element.tagName.toLowerCase() === 'span' &&
      content.startsWith('MRP RS.165')
    );
  });

  const priceTextFour = await screen.findByText((content, element) => {
    return (
      element.tagName.toLowerCase() === 'span' &&
      content.startsWith('MRP RS.98')
    );
  });

  expect(priceTextOne).toBeInTheDocument();
  expect(priceTextTwo).toBeInTheDocument();
  expect(priceTextThree).toBeInTheDocument();
  expect(priceTextFour).toBeInTheDocument();

  // check buttons
  const buttons = await screen.findAllByRole('button', {
    name: /buy now/i,
  });
  expect(buttons).toHaveLength(4);
  expect(buttons[0]).toBeEnabled();
  expect(buttons[1]).toBeEnabled();
  expect(buttons[2]).toBeEnabled();
  expect(buttons[3]).toBeEnabled();
});

test('render cart modal ', async () => {
  const cartSideNav = jest.fn(() => false);
  render(
    <>
      <BrowserRouter>
        <Header cartSideNav={cartSideNav} />
      </BrowserRouter>
      ,
      <ProductsList filterId={null} />
      <Sidebar isSlideOpen={true} cartSideNav={cartSideNav} />
    </>,
  );
  const cartBtn = screen.getByTestId('cart-btn');
  expect(cartBtn).toBeInTheDocument();
  const productbuttons = await screen.findAllByRole('button', {
    name: /buy now/i,
  });
  expect(productbuttons).toHaveLength(4);

  const cartSlider = screen.queryByTestId('cart-slider');
  expect(cartSlider).toBeInTheDocument();

  userEvent.click(cartBtn);
  const cartSliderAgain = await screen.findByTestId('cart-slider');
  expect(cartSliderAgain).toBeInTheDocument();
  expect(
    within(cartSliderAgain).getByRole('heading', {
      name: /no item in your cart/i,
    }),
  ).toBeInTheDocument();

  userEvent.click(productbuttons[0]);

  expect(
    await screen.findByRole('img', {name: /fresho kiwi - green, 3 pcs/i}),
  ).toBeInTheDocument();

  expect(
    await screen.findByRole('button', {
      name: /proceed to checkout rs\.87/i,
    }),
  ).toBeInTheDocument();
  userEvent.click(screen.getByRole('button', {name: /\+/i}));

  expect(
    await screen.findByRole('button', {
      name: /proceed to checkout rs\.174/i,
    }),
  ).toBeInTheDocument();

  userEvent.click(screen.getByRole('button', {name: /-/i}));
  expect(
    await screen.findByRole('button', {
      name: /proceed to checkout rs\.87/i,
    }),
  ).toBeInTheDocument();

  userEvent.click(screen.getByRole('button', {name: /-/i}));
  expect(
    within(cartSliderAgain).getByRole('heading', {
      name: /no item in your cart/i,
    }),
  ).toBeInTheDocument();

  const closeButton = screen.getByRole('button', {
    name: /close/i,
  });
  userEvent.click(closeButton);
  expect(cartSideNav).toBeCalled();
});
