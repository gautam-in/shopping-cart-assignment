import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";


const mockStore = configureStore([]);
let store = mockStore({
    showModal: false,
    cartItem: 0,
    cartList: []
});
jest.mock("react-redux", () => ({
    useSelector: jest.fn(fn => fn())
}));
const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);
test('should test Header component', () => {
    const wrpper = shallow(<Wrapper><Header /></Wrapper>);
    expect(wrpper).toMatchSnapshot();
});