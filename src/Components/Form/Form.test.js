import { render } from "@testing-library/react";
import Form from "./Form";

it('form rendered successfully',()=>{
    const { getAllByTestId } = render(<Form />);
    const form = getAllByTestId('form');
    expect(form).toBeTruthy();
})