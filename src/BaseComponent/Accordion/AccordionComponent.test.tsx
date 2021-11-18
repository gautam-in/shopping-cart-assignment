import { ShallowWrapper, shallow } from "enzyme";
import { ICategories } from "../../Interfaces/ICategories";
import {
    AccordionComponent,
    IAccordionComponentProps,
} from "./AccordionComponent";

describe("AccordionComponent", () => {
    const categorie:ICategories = {
        id:'0',
        order: 0,
        enabled: true,
        key: '0',
        name: 'name',
        description: 'name',
        imageUrl: 'name',
    }
    const categoriesListProps:Array<ICategories> = [categorie];
    const tree: ShallowWrapper<IAccordionComponentProps> = shallow(
        <AccordionComponent categoriesList={categoriesListProps} selectedCategorieID={null} />
    );

    test("AccordionComponent Snapshot render", () => {
        expect(tree).toMatchSnapshot();
    });

    test("Render Child AccordionComponent based on props", () => {
        expect(tree.children().length).toEqual(categoriesListProps.length)
    });

    test("Do Not Render Child AccordionComponent if categorie is not enable", () => {
        const categorie:ICategories = {
            id:'0',
            order: 0,
            enabled: false,
            key: '0',
            name: 'name',
            description: 'name',
            imageUrl: 'name',
        }
        const categoriesListProps:Array<ICategories> = [categorie];
        const tree: ShallowWrapper<IAccordionComponentProps> = shallow(
            <AccordionComponent categoriesList={categoriesListProps} selectedCategorieID={null} />
        );
        expect(tree.children().length).toEqual(0)
    });
});