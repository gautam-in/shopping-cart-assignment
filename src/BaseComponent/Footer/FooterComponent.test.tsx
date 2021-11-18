import { ShallowWrapper, shallow } from "enzyme";
import { FooterComponent } from "./FooterComponent";

describe("FooterComponent", () => {
    const tree: ShallowWrapper = shallow(
        <FooterComponent/>
    );

    test("FooterComponent Snapshot render", () => {
        expect(tree).toMatchSnapshot();
    });

    test("Check FooterComponent has classname", () => {
        expect(tree.hasClass("footer")).toEqual(true)
    });
});
