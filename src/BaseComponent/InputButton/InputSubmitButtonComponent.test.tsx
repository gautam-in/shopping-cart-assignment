import { ShallowWrapper, shallow } from "enzyme";
import { InputSubmitButtonComponent } from "./InputSubmitButtonComponent";

describe("InputSubmitButtonComponent", () => {
    const externalClassName: string = "input-button"
    const tree: ShallowWrapper = shallow(
        <InputSubmitButtonComponent id="button" buttonName="Submit" externalClassName={externalClassName}/>
    );

    test("InputSubmitButtonComponent Snapshot render", () => {
        expect(tree).toMatchSnapshot();
    });

    test("Check InputSubmitButtonComponent has classname", () => {
        expect(tree.hasClass(externalClassName)).toEqual(true)
    });
});
