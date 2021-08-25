import { fireEvent } from '@testing-library/react';
import App from './App';
import { Route } from 'react-router-dom'
import { customRender } from './utils/customMockRender';

jest.mock('./pages/HomePage', () => () => { return <div>category</div> })
jest.mock('./pages/LoginPage', () => () => { return <div>login</div> })
jest.mock('./pages/RegisterPage', () => () => { return <div>register</div> })
jest.mock('./pages/ProductListPage', () => () => { return <div>products</div> })


  describe('header and footer component is rendered on screen', () => {
    let container = null;

    beforeEach(() => {
      container = customRender(
        <Route path="/">
          <App />
        </Route>,
        {
          route: '/',
        }
      );
    })

    test('Navigation are rendered in header', () => {
      const { getByTestId } = container;
      expect(getByTestId('app-header')).toHaveTextContent('Home');
      expect(getByTestId('app-header')).toHaveTextContent('Products');
      expect(getByTestId('app-header')).toHaveTextContent('Register');
      expect(getByTestId('app-header')).toHaveTextContent('Sign in');
    })

    test('App logo and Cart Logo is render in header', () => {
      const { getByTestId } = container;
      expect(getByTestId('app-logo')).toBeInTheDocument();
      expect(getByTestId('cart-logo')).toBeInTheDocument();
    })

    test('header navigation links work as expected', async () => {
      const { getByTestId, getByText } = container;
      fireEvent.click(getByTestId('app-logo'))
      expect(getByText(/category/i)).toBeInTheDocument();
      fireEvent.click(getByTestId('cart-logo'))
      expect(getByText(/My Cart/i)).toBeInTheDocument();
      fireEvent.click(getByText(/products/i))
      expect(getByText(/products/i)).toBeInTheDocument();
      fireEvent.click(getByText(/register/i))
      expect(getByText(/register/i)).toBeInTheDocument();
    })

    test('footer is rendered', () => {
      const { getByTestId } = container;
      expect(getByTestId('footer')).toBeInTheDocument();
    })
  })