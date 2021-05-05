import React from 'react';
import ReactDom from 'react-dom';
import Button from "../button/button";
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import * as renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Button></Button>, div)
})

it("renders form correctly", () => {
    const { getByTestId } = render(<Button></Button>)
    expect(getByTestId('button'));

})
