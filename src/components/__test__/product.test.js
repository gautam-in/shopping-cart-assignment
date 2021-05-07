import React from 'react';
import ReactDom from 'react-dom';
import Product from "../product/product";
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import * as renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Product></Product>, div)
})

it("renders element correctly", () => {
    const { getByTestId } = render(<Product></Product>)
    expect(getByTestId('product'));

})
it("matches snapshot", () => {
    const tree = renderer.create(<Product></Product>).toJSON();
    expect(tree).toMatchSnapshot();
})
