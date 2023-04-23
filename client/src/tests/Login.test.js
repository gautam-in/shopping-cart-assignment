import {render,screen} from '@testing-library/react';
import Login from '../Containers/Login/Login';

describe("intial render of login page",() => {
    it("contains header and description",() => {
        render(<Login />);
        let headerElement = screen.getByText(/Login/i);
        expect(headerElement).toBeInTheDocument();
    })
})