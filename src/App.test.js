import { fireEvent, getByText, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { createMemoryHistory } from 'history'
import { createStore } from 'redux';
import reducer from './redux/reducers'
import { Route, Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/Home';
import ProductList from './components/productlist/ProductList';
import Cart from './components/cart/Cart';

jest.mock('./pages/HomePage', () => () => { return <div>category</div> })
// jest.mock('./pages/CartPage', () => () => { return <div>cart modal</div> })
jest.mock('./pages/LoginPage', () => () => { return <div>login</div> })
jest.mock('./pages/RegisterPage', () => () => { return <div>register</div> })
jest.mock('./pages/ProductListPage', () => () => { return <div>products</div> })

const stubCategoryData = [{
  description: "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
  enabled: true,
  id: "5b675e5e5936635728f9fc30",
  imageUrl: "/static/images/category/beverages.png",
  key: "beverages",
  name: "Beverages",
  order: 3
}]

const stubBannerData = [{
  bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
  bannerImageUrl: "/static/images/offers/offer1.jpg",
  id: "5b6c38156cb7d770b7010ccc",
  isActive: true,
}]

const stubProductData = [{
  category: "5b675e5e5936635728f9fc30",
  description: "Tata Tea Gold is a unique blend of fine Assam tea leaves with special 15%  long leaf.",
  id: "5b6c6f4a01a7c3842953088c",
  imageURL: "/static/images/products/beverages/tata-tea.jpg",
  name: "Tata Tea Gold Leaf Tea, 500 gm",
  price: 165,
  sku: "bev-tata-tea-500",
  stock: 50,
}]

const customRender = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    initialState,
    store = createStore(reducer, initialState),
    ...options
  } = {}
) => ({
  ...render(
    <Provider store={store}>
      <Router history={history}>{ui}</Router>
    </Provider>,
    options
  ),
  history,
});


describe('shopping bazaar app unit testing', () => {
  describe('header and footer component is rendered on screen', () => {

    test('Navigation are rendered in header', () => {
      const { getByTestId } = customRender(
        <Route path="/">
          <App />
        </Route>,
        {
          route: '/',
        }
      );
      expect(getByTestId('app-header')).toHaveTextContent('Home');
      expect(getByTestId('app-header')).toHaveTextContent('Products');
      expect(getByTestId('app-header')).toHaveTextContent('Register');
      expect(getByTestId('app-header')).toHaveTextContent('Sign in');
    })

    test('App logo and Cart Logo is render in header', () => {
      const { getByTestId } = customRender(
        <Route path="/">
          <App />
        </Route>,
        {
          route: '/',
        }
      );
      expect(getByTestId('app-logo')).toBeInTheDocument();
      expect(getByTestId('cart-logo')).toBeInTheDocument();
    })

    test('header navigation links work as expected', async () => {
      const { getByTestId, getByText } = customRender(
        <Route path="/">
          <App />
        </Route>,
        {
          route: '/',
        }
      );
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
      const { getByTestId } = customRender(
        <Route path="/">
          <App />
        </Route>,
        {
          route: '/',
        }
      );
      expect(getByTestId('footer')).toBeInTheDocument();
    })
  })

  describe('login screen is rendered', () => {
    const { getByText } = customRender(
      <Route path="/">
        <Login />
      </Route>,
      {
        route: '/',
      }
    );
    expect(getByText(/Get access to your Orders, Wishlist and Recommendations/i)).toBeInTheDocument();

    test('email and password input is rendered on screen with sign in button', () => {
      const { getByText, getByLabelText } = customRender(
        <Route path="/">
          <Login />
        </Route>,
        {
          route: '/',
        }
      );
      expect(getByLabelText(/email/i)).toBeInTheDocument();
      expect(getByLabelText(/password/i)).toBeInTheDocument();
      expect(getByText(/Sign In/i)).toBeInTheDocument();
    })

    test('Onchange for email works as expected', () => {
      const { getByLabelText } = customRender(
        <Route path="/">
          <Login />
        </Route>,
        {
          route: '/',
        }
      );
      fireEvent.change(getByLabelText(/email/i), { target: { value: 'manav.jethani@gmail.com' } })
      expect(getByLabelText(/email/i).value).toBe('manav.jethani@gmail.com')
    })
  })

  describe('register screen is rendered', () => {
    test('all input fields are rendered', () => {
      const { getByText, getByLabelText, getAllByLabelText } = customRender(
        <Route path="/">
          <Register />
        </Route>,
        {
          route: '/',
        }
      );
      expect(getByLabelText(/first name/i)).toBeInTheDocument();
      expect(getByLabelText(/last name/i)).toBeInTheDocument();
      expect(getByLabelText(/email/i)).toBeInTheDocument();
      expect(getAllByLabelText(/password/i)[0]).toBeInTheDocument();
      expect(getByLabelText(/confirm password/i)).toBeInTheDocument();
      expect(getByText(/Sign In/i)).toBeInTheDocument();
    })

    test('correct error message is rendered', () => {
      const { getByText, getByLabelText, getAllByLabelText } = customRender(
        <Route path="/">
          <Register />
        </Route>,
        {
          route: '/',
        }
      );
      fireEvent.click(getByText(/Sign In/i));
      expect(getByText(/Mandatory field missing or invalid/i)).toBeInTheDocument();

      fireEvent.change(getByLabelText(/first name/i), { target: { value: 'manav' } })
      fireEvent.change(getByLabelText(/last name/i), { target: { value: 'jethani' } })
      fireEvent.change(getByLabelText(/email/i), { target: { value: 'manav.jethani' } })
      fireEvent.change(getAllByLabelText(/password/i)[0], { target: { value: 'some password' } })
      fireEvent.change(getByLabelText(/confirm password/i), { target: { value: 'some password' } })
      fireEvent.click(getByText(/Sign In/i));
      expect(getByText(/Email invalid, must have @ and dot/i)).toBeInTheDocument();

      fireEvent.change(getByLabelText(/first name/i), { target: { value: 'manav' } })
      fireEvent.change(getByLabelText(/last name/i), { target: { value: 'jethani' } })
      fireEvent.change(getByLabelText(/email/i), { target: { value: 'manav.jethani@gmail.com' } })
      fireEvent.change(getAllByLabelText(/password/i)[0], { target: { value: 'somepassword' } })
      fireEvent.change(getByLabelText(/confirm password/i), { target: { value: 'somepassword' } })
      fireEvent.click(getByText(/Sign In/i));
      expect(getByText(/Password does not meet minimum requirements - password must have minimum length 6 characters, must have a number and alphabet/i)).toBeInTheDocument();

      fireEvent.change(getByLabelText(/first name/i), { target: { value: 'manav' } })
      fireEvent.change(getByLabelText(/last name/i), { target: { value: 'jethani' } })
      fireEvent.change(getByLabelText(/email/i), { target: { value: 'manav.jethani@gmail.com' } })
      fireEvent.change(getAllByLabelText(/password/i)[0], { target: { value: 'Somepassword12' } })
      fireEvent.change(getByLabelText(/confirm password/i), { target: { value: 'somepassword' } })
      fireEvent.click(getByText(/Sign In/i));
      expect(getByText(/Confirm Password and Password value mismatch/i)).toBeInTheDocument();
    })
  })

  describe('home page is rendered', () => {

    test('category list is rendered on screen', () => {
      const { getByTestId } = customRender(
        <Route path="/">
          <Home />
        </Route>,
        {
          route: '/',
          initialState: { TestReducer: { categoryData: stubCategoryData } }
        }
      );
      expect(getByTestId('category-list')).toBeInTheDocument();
    })

    test('banner carousel is rendered on screen', () => {
      const { getByTestId } = customRender(
        <Route path="/">
          <Home />
        </Route>,
        {
          route: '/',
          initialState: { TestReducer: { bannerData: stubBannerData, categoryData: stubCategoryData } }
        }
      );
      expect(getByTestId('carousel')).toBeInTheDocument();
    })
  })

  describe('Product screen is rendered', () => {
    test('single product is loaded on screen', () => {
      const { getByTestId } = customRender(
        <Route path="/">
          <ProductList />
        </Route>,
        {
          route: '/',
          initialState: { TestReducer: { productData: stubProductData, categoryData: stubCategoryData } }
        }
      );
      expect(getByTestId('single-product')).toBeInTheDocument();
    })
  })

  describe('Cart Modal is rendered', () => {
    test('single item added to cart', () => {
      const { getByTestId } = customRender(
        <Route path="/">
          <App />
        </Route>,
        {
          route: '/',
          initialState: { TestReducer: { cartData: stubProductData } }
        }
      );
      fireEvent.click(getByTestId('cart-logo'));
      expect(getByTestId('cart-container')).toBeInTheDocument();
    })

    test('quantity input and proceed to checkout is rendered if single item added to cart', () => {
      const { getByTestId, getByText } = customRender(
        <Route path="/">
          <App />
        </Route>,
        {
          route: '/',
          initialState: { TestReducer: { cartData: stubProductData } }
        }
      );
      fireEvent.click(getByTestId('cart-logo'));
      expect(getByTestId('cart-container')).toBeInTheDocument();
      expect(getByTestId('quantity-input')).toBeInTheDocument();
      expect(getByTestId('plus')).toBeInTheDocument();
      expect(getByTestId('sub')).toBeInTheDocument();
      expect(getByText(/proceed to checkout/i)).toBeInTheDocument();
    })

  })

})



