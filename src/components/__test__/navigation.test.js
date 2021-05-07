import React from 'react';
import ReactDom from 'react-dom';
import Navigation from "../navigation";
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import * as renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Navigation></Navigation>, div)
})

it("renders links correctly", () => {
    const { getByTestId } = render(<Navigation></Navigation>)
    expect(getByTestId('navigation'));

})
it("matches snapshot", () => {
    const tree = renderer.create(<Navigation></Navigation>).toJSON();
    expect(tree).toMatchSnapshot();
})