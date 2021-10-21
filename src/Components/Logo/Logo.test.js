import { render } from "@testing-library/react";
import Logo from "./Logo";

it('should render Logo successfully', ()=> {
   const { getAllByTestId } =  render(<Logo />);
   const logo = getAllByTestId('logo');
   expect(logo).toBeTruthy();
})