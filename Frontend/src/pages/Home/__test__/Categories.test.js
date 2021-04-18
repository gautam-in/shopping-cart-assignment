/* eslint-disable import/no-extraneous-dependencies */
import {BrowserRouter} from 'react-router-dom';
import {screen, cleanup} from '@testing-library/react';
import 'regenerator-runtime/runtime';
import {render} from '../../../test-utils/wrapper';
import Categories from '../Categories';

afterEach(() => {
  cleanup();
});

test('render categories images', async () => {
  render(
    <BrowserRouter>
      <Categories />
    </BrowserRouter>,
  );
  const categoriesImage = await screen.findAllByRole('img', {
    name: /categoriesimg$/i,
  });
  expect(categoriesImage).toHaveLength(2);

  const altText = categoriesImage.map((element) => element.alt);
  expect(altText).toEqual([
    'Beverage categoriesimg',
    'Bakery Cakes and Dairy categoriesimg',
  ]);

  const heading = await screen.findAllByRole('heading');
  expect(heading).toHaveLength(2);
  const headingText = heading.map((element) => element.textContent);
  expect(headingText).toEqual(['Beverage', 'Bakery Cakes and Dairy']);

  const paragaphTextOne = await screen.findByText((content, element) => {
    return (
      element.tagName.toLowerCase() === 'p' &&
      content.startsWith('Our beverage department')
    );
  });

  const paragaphTextTwo = await screen.findByText((content, element) => {
    return (
      element.tagName.toLowerCase() === 'p' &&
      content.startsWith('The best cupcakes')
    );
  });

  expect(paragaphTextOne).toBeInTheDocument();
  expect(paragaphTextTwo).toBeInTheDocument();

  const linkElement = await screen.findAllByRole('link');
  expect(linkElement).toHaveLength(2);

  const linkElementText = linkElement.map((element) => element.textContent);
  expect(linkElementText).toEqual([
    'Explore beverage',
    'Explore bakery-cakes-dairy',
  ]);
});
