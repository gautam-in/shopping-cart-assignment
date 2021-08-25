import { fireEvent } from "@testing-library/react";
import { Route } from "react-router-dom";
import App from "../../App";
import { customRender } from "../../utils/customMockRender";
import { stubProductData } from "../../stubData";

jest.mock('../../pages/HomePage', () => () => { return <div>category</div> })
jest.mock('../../pages/LoginPage', () => () => { return <div>login</div> })
jest.mock('../../pages/RegisterPage', () => () => { return <div>register</div> })
jest.mock('../../pages/ProductListPage', () => () => { return <div>products</div> })

describe('Cart Modal is rendered', () => {
    let container = null
    beforeEach(() => {
        container = customRender(
            <Route path="/">
                <App />
            </Route>,
            {
                route: '/',
                initialState: { TestReducer: { cartData: stubProductData } }
            }
        );
    })

    test('single item added to cart', () => {
        const { getByTestId } = container;
        fireEvent.click(getByTestId('cart-logo'));
        expect(getByTestId('cart-container')).toBeInTheDocument();
    })

    test('quantity input and proceed to checkout is rendered if single item added to cart', () => {
        const { getByTestId, getByText } = container;
        fireEvent.click(getByTestId('cart-logo'));
        expect(getByTestId('cart-container')).toBeInTheDocument();
        expect(getByTestId('modal')).toBeInTheDocument();
        expect(getByTestId('quantity-input')).toBeInTheDocument();
        expect(getByTestId('plus')).toBeInTheDocument();
        expect(getByTestId('sub')).toBeInTheDocument();
        expect(getByText(/proceed to checkout/i)).toBeInTheDocument();
    })

    test('quantity input button should increase and decrease the quantity', () => {
        const { getByTestId } = container;
        fireEvent.click(getByTestId(/cart-logo/i))
        fireEvent.click(getByTestId('plus'))
        expect(getByTestId('modal-title')).toHaveTextContent(/2 item/i);
        fireEvent.click(getByTestId('sub'));
        expect(getByTestId('modal-title')).toHaveTextContent(/1 item/i);
    })

    test('proceed to checkout should display appropriate message', async () => {
        const { getByText, getByTestId } = container;
        fireEvent.click(getByTestId('cart-logo'));
        fireEvent.click(getByText(/proceed to checkout/i));
        expect(getByText(/User not Logged In, redirecting to login screen/i)).toBeInTheDocument();
    })
})