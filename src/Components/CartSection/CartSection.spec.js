import { getAllByTestId, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CartSection from "./CartSection";

it('should render CartSection successfully', () => {
    const store = createStore(()=>({
        cartItems: [],
        openCart: false,
    }))
    const { getAllByTestId } = render(
        <Provider store={store}>
            <CartSection />
        </Provider>
    )
    const cartSection = getAllByTestId('cart-section')
    expect(cartSection).toBeTruthy();
})