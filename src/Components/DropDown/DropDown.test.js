import { render } from "@testing-library/react";
import DropDown from "./DropDown";

it('should render DropDown successfully', () => {
    const props = {
        filteredProductType: [{}],
    }
    const { getAllByTestId } = render(<DropDown {...props} />)
    const dropDown = getAllByTestId('dropdown');
    expect(dropDown).toBeTruthy();
})