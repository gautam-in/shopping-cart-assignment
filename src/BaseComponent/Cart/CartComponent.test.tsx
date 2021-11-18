import { ShallowWrapper, shallow } from "enzyme";
import { CartComponent, TCartComponentProps } from "./CartComponent";

describe("CartComponent", () => {
    const cartItemCount = 0;
    const tree: ShallowWrapper<TCartComponentProps> = shallow(
        <CartComponent cartItemCount={cartItemCount} />
    );

    test("CartComponent Snapshot render", () => {
        expect(tree).toMatchSnapshot();
    });
});