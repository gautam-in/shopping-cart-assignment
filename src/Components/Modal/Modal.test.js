import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Modal from "./Modal";

it('should render Modal successfully', () => {
    const store = createStore(()=>({
        cart:{
            cartItems:[{
                
            }]
        }
    }))
    const { getAllByTestId } = render(
        <Provider store={store}>
            <Modal />
        </Provider>
    )
    const modal = getAllByTestId('modal');
    expect(modal).toBeTruthy();
})