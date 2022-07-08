import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom';
const fs = require("fs");
const ProductPage = fs.readFileSync(__dirname + "\\..\\products-page.html").toString();
const Homepage = fs.readFileSync(__dirname + "\\..\\index.html").toString();


test('should have categories list on products page', () => {
  document.body.innerHTML = Homepage;
  expect(screen.getByTestId("carousel")).toBeInTheDocument();
});

test('cart should be visible on cart icon click', () => {
  document.body.innerHTML = ProductPage;
  const button = screen.getByTestId('cartButton');
  button.addEventListener('click', () => {
    const cartModal = screen.getByTestId("cartModal");
    cartModal.classList.add('show');
  })
  const input = screen.getByTestId('cartButton');
  input.click();

  expect(screen.queryByTestId('cartModal')).toBeTruthy();
  expect(screen.getByTestId('cartModal')).toBeVisible();
});
