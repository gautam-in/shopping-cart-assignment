import React from 'react';
import ReactDom from 'react-dom';
import Footer from "../footer/footer";
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import * as renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Footer></Footer>, div)
})

it("renders element correctly", () => {
    const { getByTestId } = render(<Footer></Footer>)
    expect(getByTestId('footer'));

})
it("matches snapshot", () => {
    const tree = renderer.create(<Footer></Footer>).toJSON();
    expect(tree).toMatchSnapshot();
})