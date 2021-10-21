import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Carausel from "./Carausel";

const store = createStore(() => ({
    carausel: {
        carauselItems: [{
            bannerImageUrl: 'https://banner-image',
            id: 0,
        }]
    }

}))
it('should render Carausel successfully', () => {
    const { getAllByTestId } = render(
        <Provider store={store}>
            <Carausel />
        </Provider>
    )
    const carusel = getAllByTestId('carausel');
    expect(carusel).toBeTruthy();
})