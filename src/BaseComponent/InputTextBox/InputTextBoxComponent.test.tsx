import { ShallowWrapper, shallow } from "enzyme";
import { InputTextBoxComponent, IInputTextBoxComponent } from "./InputTextBoxComponent";

describe("InputTextBoxComponent", () => {
    const tree: ShallowWrapper<IInputTextBoxComponent> = shallow(
        <InputTextBoxComponent id="button" type="text"/>
    );

    test("InputTextBoxComponent Snapshot render", () => {
        expect(tree).toMatchSnapshot();
    });

    test("Check InputTextBoxComponent has classname", () => {
        expect(tree.hasClass("input-textbox")).toEqual(true)
    });
});