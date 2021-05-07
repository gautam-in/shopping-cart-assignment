import React from 'react';
import ReactDom from 'react-dom';
import Modal from "../modal/modal";
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import * as renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Modal></Modal>, div)
})

it("renders element correctly", () => {
    const { getByTestId } = render(<Modal></Modal>)
    expect(getByTestId('modal'));

})
it("matches snapshot", () => {
    const tree = renderer.create(<Modal></Modal>).toJSON();
    expect(tree).toMatchSnapshot();
})
