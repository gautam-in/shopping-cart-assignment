import { render } from "@testing-library/react";
import SideBar from "./SiderBar";

it('should render SideBar successfully', () => {
    const props= {
        filteredProductType: [{
            id: '1',
            name: 'name'
        }],
    }
    const { getAllByTestId } = render(<SideBar {...props} />);
    const siderBar = getAllByTestId('side-bar');
    expect(siderBar).toBeTruthy();
})