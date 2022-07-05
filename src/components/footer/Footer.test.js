
import { render, screen } from '@testing-library/react';
import {Footer} from './../index-components';
test("Should render text on the screen", () => {
    render(<Footer />)
    const renderedComponent = screen.getByTestId("footer")
    expect(renderedComponent).not.toBeEmptyDOMElement()
})