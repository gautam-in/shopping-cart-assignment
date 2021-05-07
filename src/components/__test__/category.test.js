import React from 'react';
import ReactDom from 'react-dom';
import Category from "../category/category";
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import * as renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Category></Category>, div)
})

it("renders element correctly", () => {
    const { getByTestId } = render(<Category></Category>)
    expect(getByTestId('category'));

})
it("matches snapshot", () => {
    const tree = renderer.create(<Category></Category>).toJSON();
    expect(tree).toMatchSnapshot();
})
