import { Route } from "react-router-dom";
import { customRender } from "../../utils/customMockRender";
import Home from "../home/Home";
import { stubBannerData, stubCategoryData } from "../../stubData";

describe('home page is rendered', () => {
    let container = null;
    beforeEach(() => {
      container = customRender(
        <Route path="/">
          <Home />
        </Route>,
        {
          route: '/',
          initialState: { TestReducer: { bannerData: stubBannerData, categoryData: stubCategoryData } }
        }
      );
    })

    test('category list is rendered on screen', () => {
      const { getByTestId } = container;
      expect(getByTestId('category-list')).toBeInTheDocument();
    })

    test('banner carousel is rendered on screen', () => {
      const { getByTestId } = container;
      expect(getByTestId('carousel')).toBeInTheDocument();
    })
  })