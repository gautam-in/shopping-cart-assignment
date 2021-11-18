import { ShallowWrapper, shallow } from "enzyme";
import { FooterComponent } from "../BaseComponent/Footer/FooterComponent";
import { HeaderComponent } from "../BaseComponent/Header/HeaderComponent";
import { App } from "./App";

describe("App", () => {
    const tree: ShallowWrapper = shallow(<App/>);
    test("App Snapshot render", () => {
        expect(tree).toMatchSnapshot();
    });

    test("Check Header and Footer Loaded Snapshot render", () => {
        expect(tree.containsAllMatchingElements([
            <HeaderComponent />,
            <FooterComponent />
            ])).toEqual(true);
    });
});
