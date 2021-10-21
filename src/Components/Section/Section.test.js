import { render } from "@testing-library/react";
import Section from "./Section";

it('should render Section successfully', () => {
    const { getAllByTestId } = render(<Section />);
    const section = getAllByTestId('section');
    expect(section).toBeTruthy();
})