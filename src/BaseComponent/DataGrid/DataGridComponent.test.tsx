import { ShallowWrapper, shallow } from "enzyme";
import { IProduct } from "../../Interfaces/IProduct";
import { DataGridComponent, IDataGridComponent } from "./DataGridComponent";

describe("DataGridComponent", () => {
    const product: IProduct = {
        id: "0",
        name: "0",
        imageURL: "",
        description: "",
        price: 0,
        stock: 0,
        category: "",
        sku: "",
    };

    const productListProps: Array<IProduct> = [product];
    const tree: ShallowWrapper<IDataGridComponent> = shallow(
        <DataGridComponent productList={productListProps} />
    );

    test("DataGridComponent Snapshot render", () => {
        expect(tree).toMatchSnapshot();
    });

    test("Render Child GridComponent based on props", () => {
        expect(tree.children().length).toEqual(productListProps.length)
    });

    test("Check GridComponent Child GridComponent based on props", () => {
        expect(tree.hasClass("data-grid")).toEqual(true)
    });
});
