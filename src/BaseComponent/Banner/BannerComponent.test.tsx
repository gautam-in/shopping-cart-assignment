import { ShallowWrapper, shallow } from "enzyme";
import IBanners from "../../Interfaces/IBanners";
import { BannerComponent, IBannerComponentProps } from "./BannerComponent";

describe("BannerComponent", () => {
    const banner: IBanners = {
        id: "0",
        order: 0,
        isActive: true,
        bannerImageUrl: "",
        bannerImageAlt: "",
    };
    const bannerListProps: Array<IBanners> = [banner];
    const tree: ShallowWrapper<IBannerComponentProps> = shallow(
        <BannerComponent bannerList={bannerListProps} />
    );

    test("BannerComponent Snapshot render", () => {
        expect(tree).toMatchSnapshot();
    });

    test("Do Not Render Component if Banner List is Null", () => {
        const tree: ShallowWrapper<IBannerComponentProps> = shallow(
            <BannerComponent bannerList={[]} />
        );
        expect(tree.isEmptyRender()).toEqual(true);
    });

    test("Render Component if Banner List is Not Null", () => {
        const tree: ShallowWrapper<IBannerComponentProps> = shallow(
            <BannerComponent bannerList={bannerListProps} />
        );
        expect(tree.hasClass('banner')).toEqual(true);
    });
});
