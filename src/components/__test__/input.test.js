import React from 'react';
import ReactDom from 'react-dom';
import Input from "../input";
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import * as renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Input></Input>, div)
})

it("renders textbox correctly", () => {
    const { getByTestId } = render(<Input></Input>)
    expect(getByTestId('input'));

})
it("matches snapshot", () => {
    const tree = renderer.create(<Input></Input>).toJSON();
    expect(tree).toMatchSnapshot();
})