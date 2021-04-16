import {render, cleanup, screen} from '@testing-library/react';
import 'regenerator-runtime/runtime';
import userEvent from '@testing-library/user-event';
import Carousel from '../Carousel';

afterEach(() => {
  cleanup();
});

test('render carousel images', async () => {
  render(<Carousel />);
  const CarouselImages = await screen.findAllByRole('img', {
    name: /carouselimg$/i,
  });
  expect(CarouselImages).toHaveLength(2);

  const altText = CarouselImages.map((element) => element.alt);
  expect(altText).toEqual([
    'Independence Day Deal - 25% off on shampoo carouselimg',
    'Independence Day Deal - Rs120 off on surf carouselimg',
  ]);

  userEvent.click(
    await screen.findByRole('button', {
      name: /previous/i,
    }),
  );

  userEvent.click(
    await screen.findByRole('button', {
      name: /next/i,
    }),
  );
});
