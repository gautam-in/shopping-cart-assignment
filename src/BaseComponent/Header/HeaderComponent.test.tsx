import { ShallowWrapper, shallow } from "enzyme";
import { HeaderComponent } from "./HeaderComponent";

describe("HeaderComponent", () => {
    const tree: ShallowWrapper = shallow(
        <HeaderComponent/>
    );

    test("HeaderComponent Snapshot render", () => {
        expect(tree).toMatchSnapshot();
    });

    test("Check HeaderComponent has classname", () => {
        expect(tree.hasClass("header")).toEqual(true)
    });
});
