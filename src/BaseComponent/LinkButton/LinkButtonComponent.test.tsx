import { ShallowWrapper, shallow } from "enzyme";
import { LinkButtonComponent, ILinkButtonComponentProps } from "./LinkButtonComponent";

describe("LinkButtonComponent", () => {
    const externalClassName: string = "link-button";
    const tree: ShallowWrapper<ILinkButtonComponentProps> = shallow(
        <LinkButtonComponent id="button" buttonName="Link" to="/" externalClassName={externalClassName}/>
    );

    test("LinkButtonComponent Snapshot render", () => {
        expect(tree).toMatchSnapshot();
    });

    test("Check LinkButtonComponent has classname", () => {
        expect(tree.hasClass(externalClassName)).toEqual(true)
    });
});